// nty_web_server.ts

import express from 'express';

const app = express();
const PORT = 8089;

app.get('/', (req, res) => res.send('nty_web_server says hello'));

app.listen(PORT, () => {
  console.log(`[nty_web_server]: Server is running at http://localhost:${PORT}`);
});
