
const { SuccessModel, ErrorModel } = require('../model/resModel');
const { setKey, getKey, delKey } = require('../db/redis');

const loginCheck = () => {
  return getKey(req.sessionId).then((rs) => {
    return Promise.resolve(rs && rs.username ? new SuccessModel({ session: req.session, message: '已登录' }) : new ErrorModel('未登录！'));
  });
};

exports.loginCheck = loginCheck;