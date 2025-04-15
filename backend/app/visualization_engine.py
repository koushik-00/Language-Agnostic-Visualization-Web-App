import os
import tempfile
import subprocess
import uuid
from flask import current_app

def execute_python_script(code, viz_id):
    """Execute Python code and return the path to the generated visualization."""
    # Create a temporary directory for this execution
    temp_dir = tempfile.mkdtemp()
    
    # Create a Python script file
    script_path = os.path.join(temp_dir, f"script_{viz_id}.py")
    with open(script_path, 'w') as f:
        f.write(code)
    
    # Execute the script in a subprocess
    try:
        result = subprocess.run(
            ['python3', script_path],
            cwd=temp_dir,
            capture_output=True,
            text=True,
            timeout=30  # Limit execution time to 30 seconds
        )
        
        if result.returncode != 0:
            raise Exception(f"Script execution failed: {result.stderr}")
        
        # Check for output files
        output_files = [f for f in os.listdir(temp_dir) if f.endswith(('.png', '.jpg', '.svg', '.html'))]
        
        if not output_files:
            raise Exception("No visualization output was generated")
        
        # Move the output file to the static directory
        output_file = output_files[0]  # Take the first output file
        output_path = os.path.join(temp_dir, output_file)
        
        # Generate a unique filename for the visualization
        file_ext = os.path.splitext(output_file)[1]  # Fixed: extract extension properly
        unique_filename = f"python_{viz_id}{file_ext}"
        
        # Destination path in the static directory
        dest_path = os.path.join(
            current_app.static_folder, 
            'visualizations', 
            unique_filename
        )
        
        # Move the file
        os.rename(output_path, dest_path)
        
        return unique_filename
    
    finally:
        # Clean up the temporary directory
        for file in os.listdir(temp_dir):
            try:
                os.remove(os.path.join(temp_dir, file))
            except:
                pass
        os.rmdir(temp_dir)

def execute_r_script(code, viz_id):
    """Execute R code and return the path to the generated visualization."""
    # Create a temporary directory for this execution
    temp_dir = tempfile.mkdtemp()
    
    # Create an R script file
    script_path = os.path.join(temp_dir, f"script_{viz_id}.R")
    with open(script_path, 'w') as f:
        f.write(code)
    
    # Execute the script in a subprocess
    try:
        result = subprocess.run(
            ['Rscript', script_path],
            cwd=temp_dir,
            capture_output=True,
            text=True,
            timeout=30  # Limit execution time to 30 seconds
        )
        
        if result.returncode != 0:
            raise Exception(f"Script execution failed: {result.stderr}")
        
        # Check for output files
        output_files = [f for f in os.listdir(temp_dir) if f.endswith(('.png', '.jpg', '.svg', '.html'))]
        
        if not output_files:
            raise Exception("No visualization output was generated")
        
        # Move the output file to the static directory
        output_file = output_files[0]  # Take the first output file
        output_path = os.path.join(temp_dir, output_file)
        
        # Generate a unique filename for the visualization
        file_ext = os.path.splitext(output_file)[1]  # Fixed: extract extension properly
        unique_filename = f"r_{viz_id}{file_ext}"
        
        # Destination path in the static directory
        dest_path = os.path.join(
            current_app.static_folder, 
            'visualizations', 
            unique_filename
        )
        
        # Move the file
        os.rename(output_path, dest_path)
        
        return unique_filename
    
    finally:
        # Clean up the temporary directory
        for file in os.listdir(temp_dir):
            try:
                os.remove(os.path.join(temp_dir, file))
            except:
                pass
        os.rmdir(temp_dir)
