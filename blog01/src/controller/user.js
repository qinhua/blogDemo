const { exec } = require('../db/mysql');


// 检查是否注册过
const checkRegist = (data) => {
  return exec(`select * from users where username='${data}'`).then((rows)=>{
    return rows[0];
  });
};

// 注册
const register = (data) => {
  return exec(`insert into users (username,password,realname,createTime) values ('${data.username}','${data.password}','${data.realname}',${Date.now()})`).then((insertData) => {
    return insertData.insertId;
  });
};

// 登录
const login = (data) => {
  return exec(`select * from users where username='${data.username}' and password='${data.password}'`).then((rows) => {
    if (rows[0]) {
      return exec(`update users set lastLoginTime=${Date.now()} where id=${rows[0].id}`).then((updateData) => {
        return updateData.affectedRows ? rows[0] : {};
      });
    }
  });
};

// 退出
const logout = (data) => {
  return exec(`select * from users where username='${data.username}' and password='${data.password}'`).then((rows) => {
    return rows[0] || {};
  });
};

// 获取用户信息
const getUserInfo = (id) => {
  return exec(`select * from users where id=${id};`).then((rows) => {
    return rows[0] || {};
  });
};

module.exports = {
  checkRegist,
  register,
  login,
  logout,
  getUserInfo
};