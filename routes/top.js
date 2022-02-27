var express = require('express');
var router = express.Router()
const connection = require('../util/connectMysql');

router.get('/', function (req, res, next) {
    const sql = 'SELECT * FROM keyword';
    connection.query(
        sql,
        (error, results) => {
            console.log(results);
            // 検索実行
        }
    );
    results = {
        title: "XXXの効果",
        link: "https://news.yahoo.co.jp/pickup/6418204",
        sentence: "リンク",
      };
    res.json(results);
});

module.exports = router;
