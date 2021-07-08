#!/usr/bin/env node
// nty_cli.js

// the way 'commonjs module'
//require('../core/dist/cli/nty.js'); // commonjs module

// the way 'es6 (aka es2015) module'
import {argv} from '../core/dist/cli/nty.js';

console.log(argv);

