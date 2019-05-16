@echo off

git remote add upstream https://github.com/doze-group/REBI-TC.git

git fetch upstream
git pull upstream master
::git push origin master -f
pause