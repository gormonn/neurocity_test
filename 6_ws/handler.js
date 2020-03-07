'use strict'
const jsonObj = require('./json.js');
module.exports = function(ws, req, next) {
    ws.send(JSON.stringify(jsonObj));
}