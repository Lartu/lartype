# lartype
Lightweight, LaTeX inspired markup document editor.

## System Requirements
A x86_64 system is required to compile Lartype projects, as a 64 bit version of `Wkhtmltopdf` is used to render the PDF files. Python 2 is also required. Any modern Linux system should cover this requirements without having to do anything at all.

## How to install
Download, clone or pull and run `install_lartype`. Lartype will be installed to /usr/local/bin and added to your path. Delete the downloaded directory if you want.

## How to run
* Run `lartype -init` to initialize a new Lartype project on the current directory. All the required folders and files will be created, along with a demo project.
* Run `lartype` to compile your project to a pdf file.
* Run `lartype -pull-update` to update Lartype.
* If you update Lartype, run `lartype -update` on your project directory to update the Lartype interpreter. Until you do this, you'll still be using the previous version of Lartype.
