const { register, login, logout, getUserInfo } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');
const getExpiredTime = () => {
  let now = new Date();
  return new Date(now.setTime(now.getTime() + 24 * 60 * 60 * 1000)).toGMTString();
};

const handleUserRouter = (req, res) => {
  const method = req.method;

  if (method === 'POST' && req.path === '/api/user/register') {
    const { username, password, realname } = req.body;
    const result = register({ username, password, realname });
    return result.then((res) => {
      return res ? new SuccessModel({ id: res, message: '注册成功' }) : new ErrorModel('注册失败！');
    });
  }


  if (method === 'GET' && req.path === '/api/user/checkLogin') {
    const { username } = req.cookie;
    if (username) {
      return Promise.resolve(new SuccessModel({ username, message: '已登录' }));
    }
    return Promise.resolve(new ErrorModel('未登录！'));
  }


  if (method === 'GET' && req.path === '/api/user/login') {
    const { username, password } = req.query;
    res.setHeader('SET-Cookie', `username=${username};path=/;httpOnly;expires=${getExpiredTime()};`);
    const result = login({ username, password });
    return result.then((res) => {
      return res.username ? new SuccessModel(res) : new ErrorModel('登录失败！请检查用户名和密码');
    });
  }

  if (method === 'GET' && req.path === '/api/user/logout') {
    // const { username } = req.query;
    res.setHeader('Set-Cookie', 'username=;path=/;');
    return Promise.resolve(new SuccessModel({ message: '已退出' }));
  }

  if (method === 'GET' && req.path === '/api/user/getUserInfo') {
    const result = getUserInfo(req.query.userId);
    return result.then((res) => {
      return res.username ? new SuccessModel(res) : new ErrorModel('获取用户信息失败！');
    });
  }
};

module.exports = handleUserRouter;