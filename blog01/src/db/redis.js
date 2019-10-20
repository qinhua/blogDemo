const redis = require('redis');
const { REDIS_CONF } = require('../config/db');

// 创建实例
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);

// 错误处理
redisClient.on('error', (err) => {
  console.error(err);
});

// 数据处理
const setKey = (key, value) => {
  if (!key) {
    console.log('key不能为空');
    return;
  }
  redisClient.set(key, typeof value === 'object' ? JSON.stringify(value) : value, redis.print);
};

const getKey = (key) => {
  if (!key) {
    console.log('key不能为空');
    return;
  }
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      if (val) {
        resolve(JSON.parse(val));
        // try {
        // val = JSON.parse(val);
        // resolve(val);
        /* } catch (e) {
          resolve(val);
        } */
      } else {
        resolve(null);
      }
    });
  });
};

const delKey = (key) => {
  if (!key) {
    return;
  }
  redisClient.del(key);
};


module.exports = {
  setKey,
  getKey,
  delKey
};