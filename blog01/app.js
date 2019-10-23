const queryString = require('querystring');
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const { setKey, getKey } = require('./src/db/redis');
const { getExpiredTime } = require('./src/utils/index');
const { access } = require('./src/utils/log');

// session数据
// let SESSION_DATA = {};

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
  // if (process.env.NODE_ENV === 'production') {
  access(`${req.method} -- ${req.url} -- ${req.headers['user-agent']} -- ${Date.now()}`);
  // }

  // 获取path
  const url = req.url;
  req.path = url.split('?')[0];

  // 解析query
  req.query = queryString.parse(url.split('?')[1]);

  // 解析cookie
  req.cookie = {};
  if (req.headers.cookie) {
    let cookies = req.headers.cookie.split(';');
    cookies.map((cur) => {
      let tmp = cur.split('=');
      req.cookie[tmp[0].trim()] = tmp[1] ? tmp[1].trim() : '';
    });
  }

  // 解析session
  /* let needSetSession = false;
  let userId = req.cookie.userId;
  if (userId) {
    if (!SESSION_DATA[userId]) {
      SESSION_DATA[userId] = {};
    }
  } else {
    needSetSession = true;
    userId = `${Date.now()}_${Math.random()}`;
    SESSION_DATA[userId] = {};
  }
  req.session = SESSION_DATA[userId]; */

  // 解析session (Redis方式)
  let needSetSession = false;
  let userId = req.cookie.userId;
  if (!userId) {
    needSetSession = true;
    userId = `${Date.now()}_${Math.random()}`;
    // 初始化 redis 中的session值
    setKey(userId, {});
    // 初始化 session
    req.session = {};
  }
  // 获取session
  req.sessionId = userId;
  getKey(req.sessionId).then((sessionData) => {
    if (sessionData === null || sessionData.username === undefined) {
      // 初始化 redis 中的session值
      setKey(req.sessionId, {});
      // 初始化 session
      req.session = {};
    } else {
      req.session = sessionData;
    }

    // 处理 postdata    
    return getPostData(req);
  });

  // 设置返回格式
  res.setHeader('Content-type', 'application/json');


  getPostData(req).then((resData) => {
    req.body = resData;

    // 处理用户路由
    const userData = handleUserRouter(req, res);

    if (userData) {
      userData.then((rs) => {
        needSetSession ? res.setHeader('SET-Cookie', `userId=${userId};path=/;httpOnly;expires=${getExpiredTime()};`) : null;
        res.end(JSON.stringify(rs));
      });
      return;
    }
    // 处理博客路由
    const blogData = handleBlogRouter(req, res);
    if (blogData) {
      blogData.then((rs) => {
        needSetSession ? res.setHeader('SET-Cookie', `userId=${userId};path=/;httpOnly;expires=${getExpiredTime()};`) : null;
        res.end(JSON.stringify(rs));
      });
      return;
    }

    // 未命中任何路由
    res.writeHead(404, '{"Content-type":"text/plain"}');
    res.write('404，不存在的接口');
    res.end();
  });
};
module.exports = serverHandle;