var express = require("express");
const fetch = require("node-fetch");
var router = express.Router();
const connection = require("../util/connectMysql");
const fessUrl = require("../config.json").fess.url;

router.get("/", function (req, res, next) {
  const sql = "SELECT * FROM keyword";
  connection.query(sql, (error, results) => {
    // fetch(fessUrl+ "/json/?q=機械学習").then(res => {
    //     // resが{"size":0,"timeout":0}となってしまう
    //     console.log(results);
    //     console.log("res" + JSON.stringify(res));
    // });
  });
  results = {
    title: "XXXの効果",
    link: "https://news.yahoo.co.jp/pickup/6418204",
    sentence: "リンク",
  };
  res.json(results);
});

module.exports = router;
