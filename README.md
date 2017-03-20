# colorchecker
Get five primary colors with specified url of image

Demo: https://whoneedsthedevil.github.io/simpletrash/

Used:
1. color-thief.js - Grabs the dominant colors
2. vue.js - pretty JS-framework
3. jQuery - because I can
4. SASS - SCSS
5. webpack - with a couple of simple settings

How to setup from PowerShell (or Linux terminal):
1. cd folder
2. npm install
3. webpack

Differences between 'development' and 'production' versions:
development: creating source-maps of scripts and styles;
production: uglifying files and hiding messages from console;

Enable 'production' version:
from PowerShell: $env:NODE_ENV="production"; webpack
from Linux: NODE_ENV=production webpack

