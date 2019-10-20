const env = process.env.NODE_ENV; //环境参数

// 配置
let MYSQL_CONF;
let REDIS_CONF;

// 开发环境
if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3399,
    database: 'myblog',
    multipleStatements: true//允许执行多条sql
  };
  REDIS_CONF = {
    host: 'localhost',
    port: 6379
  };
}

// 生产环境
if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3399,
    database: 'myblog',
    multipleStatements: true//允许执行多条sql
  };
  REDIS_CONF = {
    host: 'localhost',
    port: 6379
  };
}

module.exports = { MYSQL_CONF, REDIS_CONF };
