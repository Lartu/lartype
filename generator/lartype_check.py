import os
import sys
from subprocess import call

lartype_logo = ("\033[34;1m\\\033[37;1mLartype\033[33;1m.\033[0m")

if "-init" in sys.argv:
	print "Initialized new " + lartype_logo + " project in " + os.getcwd()
	if not("lartype" in os.listdir('.')):
		call(["mkdir", os.getcwd()+"/lartype"])
	call(["cp", "/usr/local/bin/_lartype/lartype.html", os.getcwd()+"/lartype/lartype.html"])
	if not("images" in os.listdir('.')):
		call(["mkdir", os.getcwd()+"/images"])
	if not("sources" in os.listdir('.')):
		call(["mkdir", os.getcwd()+"/sources"])
	if not("lartype_sources.cfg" in os.listdir('.')):
		call(["touch", os.getcwd()+"/lartype_sources.cfg"])
		with open(os.getcwd()+"/lartype_sources.cfg", "w") as myfile:
			myfile.write("main")
	if not("main.lty" in os.listdir('./sources')):
		call(["touch", os.getcwd()+"/sources/main.lty"])
		with open(os.getcwd()+"/sources/main.lty", "w") as myfile:
			myfile.write("/section.Edit me!.section/")
	exit(1)

if "-update" in sys.argv:
	if ("lartype" in os.listdir('.')):
		print "Updated the " + lartype_logo + " interpreter in the working directory."
		call(["cp", "/usr/local/bin/_lartype/lartype.html", os.getcwd()+"/lartype/lartype.html"])
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
	print("Run \033[32;1mlartype -init\033[0m to fix the missing files.");
	exit(1)

files_needed = ["lartype.html"]

for fname in files_needed:
	if not(fname in os.listdir('./lartype')):
		print("\n\033[31;1mError:\033[0m Lartype interpreter not found: lartype/" + fname)
		print("Aborting.")
		print("Run \033[32;1mlartype -init\033[0m to fix the missing files.");
		exit(1)

print "\033[32;1mEverything okay!\033[0m" 

exit(0)
