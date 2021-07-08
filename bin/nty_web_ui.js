#!/usr/bin/env node
// nty_web_ui.js

console.log("Starting Nty-web-ui, the local web server of Nty, ...");

// the way 'commonjs module'
//require('../core/dist/srv/nty_web_server.js');

// the way 'es6 (aka es2015) module'
import {make_express_app, express_listen_callback, NTY_PORT} from '../core/dist/srv/nty_web_server.js';
const app = make_express_app();
app.listen(NTY_PORT, express_listen_callback);

console.log("end of nty_web_ui.js");
