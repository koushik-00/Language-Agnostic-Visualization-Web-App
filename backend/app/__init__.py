from flask import Flask
from flask_cors import CORS
import os

def create_app():
    app = Flask(__name__, static_folder='static')
    CORS(app)
    
    # Ensure static directories exist
    os.makedirs(os.path.join(app.static_folder, 'visualizations'), exist_ok=True)
    
    # Register blueprints
    from app.routes import api_bp
    app.register_blueprint(api_bp, url_prefix='/api')
    
    return app
