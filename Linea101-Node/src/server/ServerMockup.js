const fetch = require('node-fetch')

const url = "http://localhost:8000/api/branch";

module.exports = function () {
    return fetch(url).then(resp => resp.json())
}