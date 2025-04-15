from flask import Blueprint, request, jsonify, current_app, url_for
from app.visualization_engine import execute_python_script, execute_r_script
import os
import uuid

api_bp = Blueprint('api', __name__)

@api_bp.route('/visualize', methods=['POST'])
def visualize():
    data = request.json
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    
    language = data.get('language')
    code = data.get('code')
    
    if not language or not code:
        return jsonify({'error': 'Language and code are required'}), 400
    
    # Generate a unique ID for this visualization
    viz_id = str(uuid.uuid4())
    
    try:
        if language.lower() == 'python':
            output_file = execute_python_script(code, viz_id)
        elif language.lower() == 'r':
            output_file = execute_r_script(code, viz_id)
        else:
            return jsonify({'error': f'Unsupported language: {language}'}), 400
        
        # Construct the URL to the visualization
        visualization_url = url_for('static', filename=f'visualizations/{output_file}', _external=True)
        
        return jsonify({
            'status': 'success',
            'visualizationUrl': visualization_url
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500
