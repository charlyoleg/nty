// nty_web_server.ts

import express from 'express';

const NTY_PORT = 8089;

const app = express();

app.get('/', (req, res) => res.send('nty_web_server says hello'));


function generate_nty_web_server () {
  return app;
}

function listen_callback_function () {
  console.log(`[nty_web_server]: Server is running at http://localhost:${NTY_PORT}`);
}

//app.listen(NTY_PORT, () => {
//  console.log(`[nty_web_server]: Server is running at http://localhost:${NTY_PORT}`);
//});

//const nty_app = generate_nty_web_server();
//nty_app.listen(NTY_PORT, listen_callback_function);

export {generate_nty_web_server, listen_callback_function, NTY_PORT};

