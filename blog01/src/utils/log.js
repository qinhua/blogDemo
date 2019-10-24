const fs = require('fs');
const path = require('path');

// 生成 writeStream
const writeStream = (fileName) => {
  const fullFileName = path.join(__dirname, '../', '../', 'logs', fileName);
  return fs.createWriteStream(fullFileName, {
    flags: 'a'
  });
};

const writeLog = (writeStream, log) => {
  if (process.env.NODE_ENV === 'production') { return false; }
  writeStream.write(log + '\n');
};

// 写入访问日志
const accessWriteStream = writeStream('access.log');
const accessLog = (content) => {
  writeLog(accessWriteStream, content);
};
// 写入错误日志
const logWriteStream = writeStream('error.log');
const errorLog = (content) => {
  writeLog(logWriteStream, content);
};

module.exports = {
  accessLog,
  errorLog
};