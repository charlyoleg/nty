// nty_web_server.ts

import express from 'express';

const NTY_PORT = 8089;

const app = express();

app.get('/', (req, res) => res.send('nty_web_server says hello'));


function nty_web_server_listen () {
  app.listen(NTY_PORT, () => {
    console.log(`[nty_web_server]: Server is running at http://localhost:${NTY_PORT}`);
  });
}

export {nty_web_server_listen};

