/* const fs = require('fs');
const path = require('path');


let fileName1 = path.resolve(__dirname, 'data.txt');
let fileName2 = path.resolve(__dirname, 'data1.txt');

// 标准输入输出
// process.stdin.pipe(process.stdout)

const readFileStream = fs.createReadStream(fileName1);
const writeFileStream = fs.createWriteStream(fileName2);

readFileStream.pipe(writeFileStream);

readFileStream.on('data', chunk => {
  console.log(chunk.toString());
})

readFileStream.on('end', () => {
  console.log('copy completed');
}) */
const http = require('http')
const fs = require('fs')
const path = require('path')

const fileName = path.resolve(__dirname, 'data.txt')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<head><meta charset="utf-8"/></head>');

  if (req.method === 'GET') {
    const readFileStream = fs.createReadStream(fileName)
    readFileStream.pipe(res)
  }
})

server.listen(7800)

