#!/usr/bin/env node
// nty_web_ui.js

console.log("Starting Nty-web-ui, the local web server of Nty, ...");

// the way 'commonjs module'
//require('../core/dist/srv/nty_web_server.js');

// the way 'es6 (aka es2015) module'
import {nty_web_server_listen} from '../core/dist/srv/nty_web_server.js';
nty_web_server_listen();

console.log("end of nty_web_ui.js");
