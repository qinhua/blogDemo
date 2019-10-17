const mysql = require('mysql');
const { MYSQL_CONF } = require('../config/db');

// 创建链接对象
const connection = mysql.createConnection(MYSQL_CONF);

// 开始连接
connection.connect();

// 统一执行 sql 语句
const exec = (sql) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, res) => {
      console.log(res);
        
      if (err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
};

module.exports={
  exec
};