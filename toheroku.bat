@echo off
call heroku deploy --help || call heroku plugins:install heroku-cli-deploy 
call heroku war:deploy dist/REBI-TC.war --app java-tomcat
