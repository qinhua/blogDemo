const { getList, getDetail, addBlog, updateBlog, delBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const id = req.query.id || '';

  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const resData = getList(author, keyword);
    if (!resData) {
      return new ErrorModel('获取博客列表失败！');
    } else {
      return new SuccessModel(resData);
    }
  }
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const resData = getDetail(id);
    if (!resData) {
      return new ErrorModel('id不能为空！');
    } else {
      return new SuccessModel(resData);
    }
  }
  if (method === 'POST' && req.path === '/api/blog/add') {
    const { title, content } = req.body;
    const resData = addBlog({ title, content });
    if (!resData) {
      return new ErrorModel('新增博客失败！请检查参数');
    } else {
      return new SuccessModel(resData);
    }
  }
  if (method === 'POST' && req.path === '/api/blog/update') {
    const { id, title, content } = req.body;
    const resData = updateBlog({ id, title, content });
    if (!resData) {
      return new ErrorModel('更新博客失败！请检查参数');
    } else {
      return new SuccessModel(resData);
    }
  }
  if (method === 'POST' && req.path === '/api/blog/del') {
    const resData = delBlog(req.body.id);
    if (!resData) {
      return new ErrorModel('id不能为空！');
    } else {
      return new SuccessModel(resData);
    }
  }
};

module.exports = handleBlogRouter;