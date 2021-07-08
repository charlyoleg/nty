// nty_web_server.ts

import express from 'express';

const NTY_PORT = 8089;

function make_express_app () {
  const app = express();

  app.get('/', (req, res) => res.send('nty_web_server says hello'));

  //app.set('port', NTY_PORT);

  return app;
}

function express_listen_callback () {
  console.log(`[nty_web_server]: Server is running at http://localhost:${NTY_PORT}`);
}

//app.listen(NTY_PORT, () => {
//  console.log(`[nty_web_server]: Server is running at http://localhost:${NTY_PORT}`);
//});

//const app = make_express_app();
//app.listen(NTY_PORT, express_listen_callback);

export {make_express_app, express_listen_callback, NTY_PORT};

