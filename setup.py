from setuptools import find_packages,setup
from typing import List

HYPEN_DOT = "-e ." #to avoid this to get into the requirements

def get_requirements(file_path:str)->List[str]:
    requirements =[]
    with open(file_path) as file_obj:
        requirements = file_obj.readlines()
        requirements = [req.replace("\n","") for req in requirements] #to prevent the file object ot read the \n as a package
    if HYPEN_DOT in requirements:
        requirements.remove(HYPEN_DOT)
    return requirements



setup(
name='project1',
version='0.0.1',
description='Built and deployed a real-time machine-failure prediction model using Python and scikit-learn. Containerized with Docker and deployed to Azure App Service using CI/CD (GitHub Actions). Demonstrated cloud deployment, automation, and monitoring best practices.',
author='Aditya',
author_email='myselftlnaditya@gmail.com',
packages=find_packages(),
install_requires = get_requirements('requirements.txt') 
)