import os
import subprocess
from datetime import datetime
import shutil
import json


def json_serial(obj):
    if isinstance(obj, datetime):
        return obj.isoformat()
    raise TypeError(f'Type {type(obj)} not serializable')

# Load existing projects from projects.json
with open('src/projects.json', 'r') as dataset_file:
    dataset = json.load(dataset_file)

# Create a dictionary to track existing projects by name
existing_projects = {project['name']: project for project in dataset}

quarto_files_dir = 'quartos'
output_dir = 'public'

# Loop through quartos folder
for filename in os.listdir(quarto_files_dir):
    if filename.endswith('.qmd') and filename not in existing_projects:
        project_name = os.path.splitext(filename)[0]

        # Add new project to existing projects dictionary
        existing_projects[project_name] = {
            'name': project_name,
            'date': datetime.now().isoformat(),
            'tags': [],
            'content': '',
        }

        quarto_file = os.path.join(quarto_files_dir, filename)
        html_file_old = os.path.join(quarto_files_dir, f'{project_name}.html')
        html_file_new = os.path.join(output_dir, f'{project_name}.html')

        if not os.path.exists(html_file_new):
            try:
                # Render quarto file to HTML
                subprocess.run(['quarto', 'render', quarto_file, '--to', 'html'], check=True)
                print(f'{quarto_file} converted to HTML successfully!')

                # Move generated HTML file to output directory
                shutil.move(html_file_old, html_file_new)

                # Read HTML content and update project's 'content' field
                with open(html_file_new, 'r') as html_file:
                    existing_projects[project_name]['content'] = html_file.read()

                if existing_projects[project_name]['content'] == "":
                    print("error")

                quarto_subfiles_dir = os.path.join(quarto_files_dir, f'{project_name}_files')
                destination_quarto_subfiles_dir = os.path.join(output_dir, f'{project_name}_files')

                # Copy subfiles directory to output directory
                shutil.copytree(quarto_subfiles_dir, destination_quarto_subfiles_dir)

                # Remove original subfiles directory
                shutil.rmtree(quarto_subfiles_dir)

            except subprocess.CalledProcessError as e:
                print(f'Error occurred during conversion of {quarto_file}: {e}')
        else:
            print(f'{quarto_file} already converted to HTML')

# Update dataset with modified project information
updated_dataset = list(existing_projects.values())

# Save updated dataset to projects.json
with open('src/projects.json', 'w') as dataset_file:
    json.dump(updated_dataset, dataset_file, default=json_serial)

print('Quarto files conversion completed.')

