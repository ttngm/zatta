var express = require('express');
var router = express.Router()
const connection = require('../util/connectMysql');
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
