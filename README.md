![alt version number](https://img.shields.io/badge/version-3.0-green.svg)

# ✒️ Lartype 3 ✒️
Lightweight, LaTeX inspired markup document editor.

## Why Lartype?
While undoubtedly LaTeX is the best tool for the task, when you need to write simpler essays, texts or documents it's somewhat of an overkill. And it is **huge**, more than 3GB for the whole package! As that was too much for me and my tasks at hand, I decided to write Lartype. I've been using it and I hope you find an use for it too. It also allows to write highly modular documents, with each section written in a different file, so if many people are working on a single document, each should be able to edit a different part without this causing merge problems.

## What can Lartype do?
[Judge by yourself](https://lartu.net/projects/lartype/informe.pdf). That's an essay we wrote for an assignment, completely on Lartype. Lartype can generate tables, style text, embed images, align and position sections and more.

## System Requirements
A 64 bit, x86 compatible system is required to compile Lartype projects, as a 64 bit version of ![wkhtmltopdf](https://wkhtmltopdf.org/) is used to render the PDF files. Python 2 is also required. Any modern Linux system should cover this requirements without having to do anything at all.

## How to install
Download, clone or pull (`--depth 1` recommended!) and run `install_lartype`. Lartype will be installed to $HOME/bin and added to your path. No privileges required!

## How to run
* Run `lartype -init` to initialize a new Lartype project on the current directory. All the required folders and files will be created, along with a demo project.
* Run `lartype` to compile your project to a PDF file.
* If you update Lartype -by installing a new version-, run `lartype -update` on your project directory to update the Lartype interpreter. Until you do this, you'll still be using the previous version of Lartype.

## How to write a Lartype Document

**Initializing a Lartype Project**

When you initialize a new Lartype project, three folders (*images*, *lartype* and *sources*) and a file (*lartype_sources.cfg*) are automatically generated for you.

![alt Files Generated](https://lartu.net/projects/lartype/files_generated.png)

The *images* folder is where you should put pictures that you want to use in your Lartype document. 

The *lartype* folder shouldn't be messed with, as it contains the Lartype interpreter. You may, though, modify the *footer.html* and *header.html* located within, in case you want to add or change your document header or footer, respectively. 

The *sources* folder contains all the Lartype sources that make up your document. When it's first created, this last folder contains one single file: **main.lty**.

The *lartype_sources.cfg* file contains all the Lartype sources that you want to be compiled on your project. Each line should contain the name of a single file located inside the *sources* folder, without the *.lty* extension. When this file is first created, the first line says `main`, for *main.lty*. If you add more files to *sources*, you should add them to this file so they are added to the document once it's generated. Also, the files are compiled in the order they are listed in *lartype_sources.cfg*, so bear that in mind. You can even safely delete *main.lty* and replace it by any other *.lty* file and everything will work fine if you replace the filename accordingly in *lartype_sources.cfg*.

**Writing Your First Lartype Page**

(TODO)

**Styling Text**

(TODO)

**Text Location and Alignment**

(TODO)

**Lists**

(TODO)

**Adding Pictures to Your Document**

(TODO)

**Adding References**

(TODO)

**Left and Right Blocks**

(TODO)

**Parallel Sections**

(TODO)

**Creating Tables**

(TODO)

**Breaks, Lines and Page Breaks**

(TODO)

**Inline Code Fragments and Code Blocks**

(TODO)

**Adding New Files to Your Document**

(TODO)

**TODOs and Comments**

(TODO)

**Alternate Image Sizes**

(TODO)

