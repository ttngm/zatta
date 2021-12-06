var express = require('express');
var router = express.Router()
const mysql = require('mysql');
const config = require('../config.json').develop
// DB設定
const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
})
connection.connect((err) => {
    if (err) {
        console.log('error connecting:' + err.stack);
        return;
    }
    console.log('success');
})

router.get('/', function (req, res, next) {
    const sql = 'SELECT * FROM keyword';
    connection.query(
        sql,
        (error, results) => {
            res.json(results);
        }
    );
});

router.post('/', function (req, res, next) {
    console.log("post");
    const sql = 'INSERT INTO keyword (keyword) VALUES(?)';
    connection.query(
        sql,
        [req.body.keyword],
        (error, results) => {
            const sql = 'SELECT * FROM keyword';
            connection.query(
                sql,
                (error, results) => {
                    res.json(results);
                }
            );
        }
    );

});

module.exports = router;
