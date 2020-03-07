const jsonObj = require('./json.js');

module.exports = function (req, res) {
    res.send(JSON.stringify(jsonObj));
}