"use strict"
/* This package is made by TecDeveloper and other contributors (https://github.com/tecdeveloper/quickcalldev/contributors). 

Keep in mind that this package should NOT be used in production as it is a beta version. For stable ones, check https://npmjs.com/package/quickcall.

Licensed under the MIT license. */

const classic = require("./lib/classic/shorts.js");
const third = require("./lib/third-party/shorts.js")
const chalk = require("chalk")
let customShort = false;
let thirdPartyEnabled = true;
let customFiles = false;

const thirdparty = [
  "simple-get", 
  "express", 
  "chalk",
  "aoi.js"
];

try {
  var simpleget = require('simple-get')
  var simpleGetVer = require('simple-get/package.json').version
} catch (er) {
  simpleget = null
}
if (simpleGetVer >= '4.0.1') {
  simpleget = null
}