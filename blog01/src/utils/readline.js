const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 读取文件
const fileName = path.join(__dirname, '../', '../', 'logs', 'access.log');
console.log(fileName);

// 创建流
const readStream = fs.createReadDStream(fileName, (err) => {
  if (err) {
    console.error(err);
    return false;
  }
});

const rl = readline.createInterface({ input: readStream });
let num = 0;
let chromeNum = 0;

// 逐行读取
rl.on('line', (data) => {
  if (data) {
    let tmp = data.split(' -- ');
    num++;//累加总数
    tmp[3] && tmp[3].indexOf('chrome') > -1 ? chromeNum++ : null;//累加Chrome总数
  } else {
    return false;
  }
});

// 读取结束
rl.on('close', (err, data) => {
  console.log(`日志总条数：${num}，其中Chrome浏览器占${((chromeNum / num).toFixed(2)) * 100}%`);
});
