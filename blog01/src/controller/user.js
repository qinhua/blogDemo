const { exec } = require('../db/mysql')

// 登录
const login = (data) => {
  if (data.userName === 'BabyChin' && data.password === '123456') {
    return {
      message: '登录成功'
    };
  } else {
    return false;
  }
};

// 退出
const logout = (data) => {
  return {
    message: '注销成功'
  };
};

// 获取用户信息
const getUserInfo = (id) => {
  return exec(`select * from users where id=${id}`)
  /* if (id) {
    return {
      name: '覃华',
      age: 18,
      role: '超级管理员',
      message: '用户信息获取成功'
    };
  } else {
    return false;
  } */
};

module.exports = {
  login,
  logout,
  getUserInfo
};