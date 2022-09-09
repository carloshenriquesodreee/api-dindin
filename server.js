const express = require('express');
const routes = require('./routes/index');
const server = express();

server.use(express.json());

server.use(routes);

server.listen (3001, () => {console.log("servidor ok")});
