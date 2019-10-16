const { exec } = require('../db/mysql')

// 登录
const login = (data) => {
  return exec(`select * from users where username='${data.username}' and password='${data.password}'`).then(rows => {
    return rows[0] || {}
  })
};

// 退出
const logout = (data) => {
  return {
    message: '注销成功'
  };
};

// 获取用户信息
const getUserInfo = (id) => {
  return exec(`select * from users where id=${id};`).then(rows => {
    return rows[0] || {}
  })
};

module.exports = {
  login,
  logout,
  getUserInfo
};