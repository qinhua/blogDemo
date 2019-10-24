const { errorLog } = require('../utils/log');

class BaseModel {
  constructor(data, message) {
    if (typeof data === 'string') {
      this.message = data;
      data = null;
      message = null;
    }
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.errCode = 0;
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    errorLog(`[${new Date().toLocaleString()}] ${data ? data.toString() : '未知错误'}`);
    this.errCode = -1;
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
};