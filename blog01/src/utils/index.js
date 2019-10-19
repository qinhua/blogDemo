const getExpiredTime = () => {
  let now = new Date();
  return new Date(now.setTime(now.getTime() + (24 * 60 * 60 * 1000))).toGMTString();
};

module.exports = {
  getExpiredTime
};