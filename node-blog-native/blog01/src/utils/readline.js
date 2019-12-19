const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 读取文件
const fileName = path.join(__dirname, '../', '../', 'logs', 'access.log');
console.log(fileName);

// 创建流
const readStream = fs.createReadStream(fileName, (err) => {
  if (err) {
    console.error(err);
    return false;
  }
});

const rl = readline.createInterface({ input: readStream });

let num = 0;
let chromeNum = 0;
let safariNum = 0;
let mobileNum = 0;
let iosNum = 0;
let androidNum = 0;
// 转换为百分比
const toPercent = (data) => {
  return data ? `${(Math.round((data / num) * 10000) / 100.00)}%` : '0%';
};

// 逐行读取
rl.on('line', (data) => {
  if (data) {
    num++; //累加总条数
    let tmp = data.split(' -- ');
    if (tmp[2]) {
      tmp[2].toLowerCase().match(/chrome/g) ? chromeNum++ : null; //累加Chrome数
      tmp[2].toLowerCase().match(/safari/g) && !tmp[2].toLowerCase().match(/chrome/g) ? safariNum++ : null; //累加Safari数
      tmp[2].toLowerCase().match(/mobile/g) ? mobileNum++ : null; //累加Mobile数
      tmp[2].toLowerCase().match(/iphone|mac/g) ? iosNum++ : null; //累加Ios数
      tmp[2].toLowerCase().match(/android/g) ? androidNum++ : null; //累加Android数
    }
  } else {
    return false;
  }
});

// 读取结束
rl.on('close', (err, data) => {
  console.log(`日志总条数：${num}。\n其中Chrome浏览器${toPercent(chromeNum)}，Safari浏览器${toPercent(safariNum)}，移动端${toPercent(safariNum)}，
  ios系统${toPercent(iosNum)}，android系统${toPercent(androidNum)}。`);
});
