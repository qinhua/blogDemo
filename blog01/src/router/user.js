const { login, logout, getUserInfo } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleUserRouter = (req, res) => {
  const method = req.method;
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body;
    const result = login({ username, password });
    return result.then(res => {
      return res.username ? new SuccessModel(res) : new ErrorModel('登录失败！请检查用户名和密码');
    })
  }
  if (method === 'POST' && req.path === '/api/user/logout') {
    return new SuccessModel(logout());
  }
  if (method === 'GET' && req.path === '/api/user/getUserInfo') {
    const result = getUserInfo(req.query.userId);
    return result.then(res => {
      return res.username ? new SuccessModel(res) : new ErrorModel('获取用户信息失败！');
    })
  }
};

module.exports = handleUserRouter;