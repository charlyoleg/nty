#!/usr/bin/env node
// browser_opens_nty_url.js

//const open = require('open'); // commonjs module
import open from 'open'; // es6 (aka es2015) module



// the javacript sleep function
async function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}


// main function
// top-level await is allowed in ES-module but this iefi is kept for backward compatibility with node v12
(async () => {
  console.log("browser_opens_nty_url.js is starting ...");
  await sleep(1000); // waiting one second
  await open('http://localhost:8089');
  console.log("end of browser_opens_nty_url.js");
})()


