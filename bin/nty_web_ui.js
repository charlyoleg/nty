#!/usr/bin/env node
// nty_web_ui.js

console.log("Starting Nty-web-ui, the local web server of Nty, ...");

// the way 'commonjs module'
//require('../core/dist/srv/nty_web_server.js');

// the way 'es6 (aka es2015) module'
import {generate_nty_web_server, listen_callback_function, NTY_PORT} from '../core/dist/srv/nty_web_server.js';
const nty_app = generate_nty_web_server();
nty_app.listen(NTY_PORT, listen_callback_function);

console.log("end of nty_web_ui.js");
