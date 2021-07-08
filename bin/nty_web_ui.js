#!/usr/bin/env node
// nty_web_ui.js
console.log("Starting Nty-web-ui, the local web server of Nty, ...");
// using express-js
//require('../core/dist/srv/nty_web_server.js'); // commonjs module
import {make_express_app, express_listen_callback, NTY_PORT} from '../core/dist/srv/nty_web_server.js'; // es6 (aka es2015) module

const app = make_express_app();
app.listen(NTY_PORT, express_listen_callback);

