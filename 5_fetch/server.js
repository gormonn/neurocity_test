const express = require('express')
const cors = require('cors');
const app = express().use("*",cors());
const jsonObj = require('./json.js');
const PORT = 3000;

app.get('/getData', function (req, res) {
    res.send(JSON.stringify(jsonObj));
})
 
app.listen(PORT, function () {
    console.log(`Server is started on port: ${PORT}
    Open file in browser: file://${__dirname}/index.html`)
});