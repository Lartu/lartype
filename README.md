![alt version number](https://img.shields.io/badge/version-3.0-green.svg)

# ✒️ Lartype ✒️
Lightweight, LaTeX inspired markup document editor.

## Why Lartype?
While undoubtedly LaTeX is the best tool for the task, when you need to write simpler essays, texts or documents it's somewhat of an overkill. And it is **huge**, more than 3GB for the whole package! As that was too much for me and my tasks at hand, I decided to write Lartype. I've been using it and I hope you find an use for it too.

## System Requirements
A x86_64 system is required to compile Lartype projects, as a 64 bit version of ![wkhtmltopdf](https://wkhtmltopdf.org/) is used to render the PDF files. Python 2 is also required. Any modern Linux system should cover this requirements without having to do anything at all.

## How to install
Download, clone or pull and run `install_lartype`. Lartype will be installed to $HOME/bin and added to your path. No privileges required!

## How to run
* Run `lartype -init` to initialize a new Lartype project on the current directory. All the required folders and files will be created, along with a demo project.
* Run `lartype` to compile your project to a PDF file.
* If you update Lartype -by installing a new version-, run `lartype -update` on your project directory to update the Lartype interpreter. Until you do this, you'll still be using the previous version of Lartype.


