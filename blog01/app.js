const queryString = require('querystring');
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({});
    } else {
      if (req.headers['content-type'] !== 'application/json') {
        resolve({});
      } else {
        let postData = '';
        req.on('data', (chunk) => {
          postData += chunk.toString();
        });
        req.on('end', () => {
          if (!postData) {
            resolve({});
          } else {
            resolve(JSON.parse(postData));
          }
        });
      }
    }
  });
};
const serverHandle = (req, res) => {
  // 获取path
  const url = req.url;
  req.path = url.split('?')[0];

  // 解析query
  req.query = queryString.parse(url.split('?')[1]);


  // 设置返回格式
  res.setHeader('Content-type', 'application/json');


  getPostData(req).then((resData) => {
    req.body = resData;
    // 处理博客路由
    const blogData = handleBlogRouter(req, res);
    if (blogData) {
      blogData.then(rs => {
        res.end(JSON.stringify(rs));
      })
      return;
    }

    // 处理用户路由
    const userData = handleUserRouter(req, res);
    if (userData) {
      userData.then(rs => {
        res.end(JSON.stringify(rs));
      })
      return;
    }

    // 未命中任何路由
    res.writeHead(404, '{"Content-type":"text/plain"}');
    res.write('404，不存在的接口');
    res.end();
  });
};
module.exports = serverHandle;