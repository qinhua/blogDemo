const { getList, getDetail, addBlog, updateBlog, delBlog } = require('../controller/blog');
const { getKey } = require('../db/redis');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const loginCheck = (req) => {
  return getKey(req.sessionId).then((rs) => {
    if (!rs || !rs.username) {
      return Promise.reject(new ErrorModel('请先登录！'));
    }
  });
};

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const id = req.query.id || '';

  if (method === 'GET' && req.path === '/api/blog/list') {
    /* if (loginCheck(req)) {
      return loginCheck;
    } */
    return getKey(req.sessionId).then((rs) => {
      if (!rs || !rs.username) {
        return new ErrorModel('请先登录！');
      } else {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const result = getList(author, keyword);
        return result.then((res) => {
          return new SuccessModel(res);
        }).catch((err) => {
          return new ErrorModel(err || '获取博客列表失败！');
        });
      }
    });
  }
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const result = getDetail(id);
    return result.then((res) => {
      return res ? new SuccessModel(res) : new ErrorModel('获取博客详情失败！');
    });
  }
  if (method === 'POST' && req.path === '/api/blog/add') {
    const { title, content } = req.body;
    const author = 'BabyChin';//需要登录之后获取，先用假数据
    if (title && content && author) {
      const result = addBlog({ title, content, author });
      return result.then((res) => {
        return res ? new SuccessModel(res) : new ErrorModel('新增博客失败！');
      }).catch((err) => {
        return new ErrorModel('新增博客失败！');
      });
    }
    /* else {
      if (!title) {
        return () => {
          return new ErrorModel('标题不能为空！');
        }
      }
      if (!content) {
        return () => {
          return new ErrorModel('内容不能为空！');
        }
      }
      if (!author) {
        return () => {
          return new ErrorModel('作者不能为空！');
        }
      }
    } */
  }
  if (method === 'POST' && req.path === '/api/blog/update') {
    const { id, title, content } = req.body;
    const author = 'BabyChin';//需要登录之后获取，先用假数据
    const result = updateBlog({ id, title, content, author });
    return result.then((res) => {
      return res ? new SuccessModel(res) : new ErrorModel('更新博客失败！');
    });
  }
  if (method === 'POST' && req.path === '/api/blog/del') {
    // 先查是否已经删除    
    const result = getDetail(req.body.id, 0);
    return result.then((rs) => {
      if (!rs) {
        return new ErrorModel('数据不存在了！');
      } else {
        const author = 'BabyChin';//需要登录之后获取，先用假数据
        const result = delBlog(req.body.id, author);
        return result.then((res) => {
          return res ? new SuccessModel(res) : new ErrorModel('删除博客失败！');
        });
      }
    });


  }
};

module.exports = handleBlogRouter;