const fs = require('fs');
const path = require('path');

// 生成 writeStream
const writeStream = (fileName) => {
  const fullFileName = path.join(__dirname, '../', '../', 'logs', fileName);
  console.log(fullFileName, 8711);
  return fs.createWriteStream(fullFileName, {
    flags: 'a'
  });
};

const writeLog = (writeStream, log) => {
  writeStream.write(log + '\n');
};

// 写入访问日志
const accessWriteStream = writeStream('access.log');
const access = (log) => {
  writeLog(accessWriteStream, log);
};

module.exports = {
  access
};