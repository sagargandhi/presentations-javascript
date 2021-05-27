
https://github.com/sagargandhi/presentations-javascript.git

Required software :

Install Chocolatey from chocolatey.org..
It is a package manager software which installs software on windows, similar to 
Homebrew for Mac, Apt / Yum package managers for Linux / UNIX environments (GNOME/KDE OS)

Software package managers are popular on UNIX/Linux OSes which do not have GUI as most often they are the only source via which software can be installed..

1. VS Code.
2. Node JS
3. Yarn js.


We can install the packages using the command line below:
You can choose to install the latest version or select to install specific versions by using the command below
choco install vscode --version=1.56.0 -y
choco install nodejs --version=12.18.3 -y
choco install yarn --version=1.22.4 -y

You need to run the shell script as an administrator.

Once the installation is complete, then run the commands below:
1. node --version
It should display 12.18.3 or the latest / your selected version..

2. yarn --version
It should display 1.22.4 or the latest / your selected version..

3. Check the version of visual studio code from Editor -> Help -> About..

First session on 12th May 2021..

Session 1 Topics :

1. Installations
2. Setup of Live-server to render static html pages.
3. Setup of Javascript files within the application
4. DOM manipulations using javascript
5. Introduction to Javascript arrays.
6. Event handling using Javascript
7. Adding local dependencies using Yarn.
8. Introduction to the Babel CLI by converting ES6 files to ES05.


Second session on 28th May 2021

Session 2 Topics:

1. Introduction to using third party libraries like Moment JS.
2. Use of yarn to import third party libraries
3. XMLHttpRequest for rest calls.
4. Fetch API
5. Introduction to ES 06 promises (Asynchronous)
6. Introduction to Web pack features like
    a. Live reload.
    b. Bundling
    c. Tree shaking
    d. Babel compiler presets etc...
7. Hosting static websites over the internet
