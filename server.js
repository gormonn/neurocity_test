const express = require('express')
const cors = require('cors');
const app = express().use("*",cors());
const PORT = 3000;
const fetchHandler = require('./5_fetch/handler');

app.get('/5_fetch', fetchHandler);
 
app.listen(PORT, function () {
    const startMsg = 
`Server is started on port: ${PORT}
Open files in browser:
file:///${__dirname}/5_fetch/index.html`
    console.log(startMsg);
});