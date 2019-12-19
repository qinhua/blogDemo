const fs = require('fs');
const path = require('path');

// callback方式获取文件内容
const getFileContent = (fileName) => {
  return new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, 'files', fileName);
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      resolve(JSON.parse(data.toString()));
    });
  });
};

getFileContent('a.json').then((res1) => {
  console.log(res1);
  return getFileContent(res1.next);
}).then((res2) => {
  console.log(res2);
  return getFileContent(res2.next).then((res3) => {
    console.log(res3);    
  });
}).catch((err) => {
  console.error(err);
});