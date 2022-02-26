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
    const insertSql = 'INSERT INTO keyword (keyword) VALUES(?)';
    const existCheckSql = 'SELECT count(*) as count FROM keyword WHERE keyword = ?';
    const selectSql = 'SELECT * FROM keyword';
    connection.query(
        // 登録済みチェック
        existCheckSql,
        [req.body.keyword],
        (error, results) => {
            if(results[0].count != "0"){
                // 登録済みの場合はメッセージを返す
                errorMessage = "登録済みのキーワードです";
                res.json({errorMessage});
            } else {
                // 未登録の場合は登録処理を実施
                connection.query(
                    insertSql,
                    [req.body.keyword],
                    (error, results) => {
                        console.log("insert success");
                        connection.query(
                            // 登録後のキーワード一覧を取得
                            selectSql,
                            [req.body.keyword],
                            (error, results) => {
                                console.log("select success");
                                res.json(results);
                            }
                        );
                    }
                );
            }
        }
    );
});

module.exports = router;
