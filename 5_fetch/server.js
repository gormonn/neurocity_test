const express = require('express')
const cors = require('cors');
const app = express().use("*",cors());
const pjson = require('./package.json');
const PORT = pjson.server.port || 3000;

console.log(PORT)
app.get('/getData', function (req, res) {
    const msg = {
        "firstName": "John",
        "lastName": "Smith",
        "isAlive": true,
        "age": 25,
        "company": null,
        "height_cm": 167.64,
        "address": {
            "streetAddress": "21 2nd Street",
            "city": "New York",
            "state": "NY",
            "postalCode": "10021-3100"
        },
        "phoneNumbers": [
            {
                "type": "home",
                "number": "212 555-1234"
            },
            {
                "type": "fax",
                "number": "646 555-4567"
            }
        ]
    };
    res.send(JSON.stringify(msg));
})
 
app.listen(PORT);