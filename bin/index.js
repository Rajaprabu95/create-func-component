#!/usr/bin/env node

var cf = require("./../lib/createFile")

// get arguments after first two elements in process.argv
var arguments = process.argv.splice(2);

// Check if component name provided
if ( arguments.length === 0) {
    console.error("Need to pass component name as argument.");
    return
} 

const componentWithFilePath = arguments[0];

cf.createFiles(componentWithFilePath);
