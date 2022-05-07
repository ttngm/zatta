const config = require('../config.json').db.develop
const mysql = require('mysql');


// DB設定読み込み
const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
  })
  
  // DB接続
  connection.connect((err) => {
    if (err) {
        console.log('error connecting:' + err.stack);
        return;
    }
    console.log('conneted DB');
  })


  module.exports = connection;