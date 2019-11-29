const getExpiredTime = () => {
  let now = new Date();
  return new Date(now.setTime(now.getTime() + (24 * 60 * 60 * 1000))).toGMTString();
};
/* 字符转为html命名实体 */
const stringToEntity = (str) => {
  var div = document.createElement('div');
  div.innerText = str;
  div.textContent = str;
  var res = div.innerHTML;
  return res;
};
/* html命名实体转换为字符 */
const entityToString = (entity) => {
  var div = document.createElement('div');
  div.innerHTML = entity;
  var res = div.innerText || div.textContent;
  return res;
};
module.exports = {
  getExpiredTime,
  stringToEntity,
  entityToString
};