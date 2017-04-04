from setuptools import setup, find_packages
from organization_themes import __version__
import subprocess

def get_long_desc():
    """Use Pandoc to convert the readme to ReST for the PyPI."""
    try:
        return subprocess.check_output(['pandoc', '-f', 'markdown', '-t', 'rst', 'README.mdown'])
    except:
        print("WARNING: The long readme wasn't converted properly")

long_desc = get_long_desc()

setup(name='mezzanine-organization-themes',
    version=__version__,
    description='Themes for the Mezzo CMS',
    long_description=long_desc.decode("ascii"),
    author='Guillaume Pellerin',
    author_email='guillaume.pellerin@ircam.fr',
    url='https://github.com/Ircam-Web/mezzanine-organization-themes',
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=[
        'mezzanine-organization',
    ],
    classifiers = [
        "Development Status :: 5 - Production/Stable",
        "Environment :: Web Environment",
        "Framework :: Django",
        "Intended Audience :: Developers",
        'License :: OSI Approved :: GPLv3 License',
        "Operating System :: OS Independent",
        "Programming Language :: Python",
        "Programming Language :: Python :: 2.7",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.4",
        "Programming Language :: Python :: 3.5",
        "Topic :: Internet :: WWW/HTTP",
        "Topic :: Internet :: WWW/HTTP :: Dynamic Content",
        "Topic :: Internet :: WWW/HTTP :: WSGI",
        "Topic :: Software Development :: Libraries :: Application Frameworks",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
)
