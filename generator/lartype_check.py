import os
import sys
from subprocess import call

lartype_logo = ("\033[34;1m\\\033[37;1mLartype\033[33;1m.\033[0m")

if "-pull-update" in sys.argv :
	print "Downloading latest "+lartype_logo+" version..."
	call(["wget", "https://github.com/Lartu/lartype/archive/master.zip"])
	print "Unpacking..."
	call(["unzip", "-o", "master.zip"])
	print "Finding installer..."
	call(["sh", "lartype-master/install_lartype"])
	print "Cleaning up..."
	call(["rm", "-rf", "lartype-master"])
	call(["rm", "master.zip*"])
	call(["lartype", "-update"])
	exit(1)

if "-init" in sys.argv or "-fix" in sys.argv :
	if "-init" in sys.argv:
		print "Initialized new " + lartype_logo + " project in " + os.getcwd()
	else:
		print "Fixing missing " + lartype_logo + " project files in " + os.getcwd()
	if not("lartype" in os.listdir('.')):
		call(["mkdir", os.getcwd()+"/lartype"])
	call(["cp", "/usr/local/bin/_lartype/lartype.html", os.getcwd()+"/lartype/lartype.html"])
	call(["cp", "/usr/local/bin/_lartype/styles.css", os.getcwd()+"/lartype/styles.css"])
	call(["cp", "/usr/local/bin/_lartype/lartype.js", os.getcwd()+"/lartype/lartype.js"])
	if not("header.html" in os.listdir('./lartype')):
		call(["cp", "/usr/local/bin/_lartype/header.html", os.getcwd()+"/lartype/header.html"])
	if not("footer.html" in os.listdir('./lartype')):
		call(["cp", "/usr/local/bin/_lartype/footer.html", os.getcwd()+"/lartype/footer.html"])
	if not("images" in os.listdir('.')):
		call(["mkdir", os.getcwd()+"/images"])
	if not("sources" in os.listdir('.')):
		call(["mkdir", os.getcwd()+"/sources"])
	if not("lartype_sources.cfg" in os.listdir('.')):
		call(["touch", os.getcwd()+"/lartype_sources.cfg"])
		with open(os.getcwd()+"/lartype_sources.cfg", "w") as myfile:
			myfile.write("main")
	if ("-init" in sys.argv) and not("main.lty" in os.listdir('./sources')):
		call(["touch", os.getcwd()+"/sources/main.lty"])
		with open(os.getcwd()+"/sources/main.lty", "w") as myfile:
			myfile.write("/section.Edit me!.section/")
	exit(1)

if "-update" in sys.argv:
	if ("lartype" in os.listdir('.')):
		print "Updated the " + lartype_logo + " interpreter in the working directory."
		call(["cp", "/usr/local/bin/_lartype/lartype.html", os.getcwd()+"/lartype/lartype.html"])
		call(["cp", "/usr/local/bin/_lartype/styles.css", os.getcwd()+"/lartype/styles.css"])
		call(["cp", "/usr/local/bin/_lartype/lartype.js", os.getcwd()+"/lartype/lartype.js"])
	else:
		print("\033[31;1mError:\033[0m This directory does not contain a valid Lartype project.")
		print("Run \033[32;1mlartype -init\033[0m to initialize one or fix missing files.");
		exit(1)
	exit(1)

cwd = os.getcwd()

print lartype_logo + " running some checks...",

files_needed = ["lartype_sources.cfg", "sources", "lartype"]

errors = 0

for fname in files_needed:
	if not(fname in os.listdir('.')):
		if(errors == 0):
			print("")
		print("\033[31;1mError:\033[0m Your working directory doesn't contain the following file or directory: " + fname)
		errors = errors + 1

if(errors > 0):
	print("Aborting.")
	print("Run \033[32;1mlartype -fix\033[0m to fix the missing files.");
	exit(1)

errors = 0
files_needed = ["lartype.html", "styles.css", "lartype.js"]

for fname in files_needed:
	if not(fname in os.listdir('./lartype')):
		if(errors == 0):
			print("")
		print("\033[31;1mError:\033[0m Your working directory doesn't contain the following file or directory: " + fname)
		errors = errors + 1

if(errors > 0):
	print("Aborting.")
	print("Run \033[32;1mlartype -fix\033[0m to fix the missing files.");
	exit(1)

print "\033[32;1mEverything okay!\033[0m" 

if "-full" in sys.argv: #Render without header and footer
	exit(2)
else:
	exit(0)
