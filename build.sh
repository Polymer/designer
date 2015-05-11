#!/bin/bash

browserify -e node_modules/css -s css -o vendor/css.js
browserify -e node_modules/dom5 -s dom5 -o vendor/dom5.js
browserify -e node_modules/parse5 -s parse5 -o vendor/parse5.js
#browserify -x vendor/dom5.js vendor/parse5.js -e node_modules/hydrolysis -s hydrolysis -o vendor/hydrolysis.js
