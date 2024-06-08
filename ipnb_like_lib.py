import json
import os
import sys
import types

def import_notebook(notebook_path):
    """Import a Jupyter notebook as a module."""
    with open(notebook_path, 'r', encoding='utf-8') as f:
        notebook = json.load(f)

    # Create a module object
    mod_name = os.path.splitext(os.path.basename(notebook_path))[0]
    mod = types.ModuleType(mod_name)
    mod.__file__ = notebook_path

    # Execute every cell in the notebook
    for cell in notebook['cells']:
        if cell['cell_type'] == 'code':
            code = ''.join(cell['source'])
            exec(code, mod.__dict__)

    # Insert the module into sys.modules
    sys.modules[mod_name] = mod
    return mod
