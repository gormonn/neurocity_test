'use strict'
const express = require('express');
const cors = require('cors');
const app = express().use("*",cors());
require('express-ws')(app);

const PORT = 3000;
const fetchHandler = require('./5_fetch/handler');
const wsHandler = require('./6_ws/handler');

app.get('/5_fetch', fetchHandler);
app.ws('/6_ws', wsHandler);
 
app.listen(PORT, function () {
    const startMsg = 
`
Server is started on port: ${PORT}
Open files in browser:
${filePath('5_fetch')}
${filePath('6_ws')}
`
    console.log(startMsg);
});

const filePath = exercise => 
    `file:///${__dirname}/${exercise}/index.html`