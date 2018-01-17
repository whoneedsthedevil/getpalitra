# colorchecker
This app determinate five primary colors from specified url of image

Demo: https://whoneedsthedevil.github.io/getpalitra/

Stack:
1. color-thief.js - Grabs the dominant colors
2. vue.js - JS-framework
3. jQuery 
4. SCSS
5. webpack - with a couple of simple settings

How to setup from cmd/PowerShell:
1. cd folder
2. npm install
3. webpack

Differences between 'development' and 'production' versions:
* development: creating source-maps of scripts and styles;
* production: uglifying files and hiding messages from console;

Enable 'production' version:
* from PowerShell: $env:NODE_ENV="production"; webpack
* from Linux: NODE_ENV=production webpack

