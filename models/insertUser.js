// ★★お試しコード

const config = require('../config.json')
var { Client } = require('pg');

// DB接続情報を設定
var client = new Client(config.develop)

var insertUser = function (id, name, pass) {
    client.connect()
        .then(() => console.log('Connected successfully'))
        .then(() => client.query("insert into users(id, name, password) values($1,$2,$3)", [id, name, pass]))
        .then(results => console.table(results.rows))
        .catch((e => console.log(e)))
        .finally((() => client.end()))
}

module.exports = insertUser;