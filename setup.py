from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in airflow/__init__.py
from airflow import __version__ as version

setup(
	name="airflow",
	version=version,
	description="Airflow related code base",
	author="VPS",
	author_email="vps@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
