const { exec } = require('../db/mysql')

// 获取博客列表
const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by id desc;`
  return exec(sql)
  
  /* return [
    {
      id: 1,
      title: '文章一',
      content: '文章内容，哈哈哈，好开心。',
      author: '刘武',
      createTime: 1570962664888
    },
    {
      id: 2,
      title: '文章二',
      content: '文章内容，哈哈哈，好开心。',
      author: '张三',
      createTime: 1570962664888
    },
    {
      id: 3,
      title: '文章三',
      content: '文章内容，哈哈哈，好开心。',
      author: '刘小二',
      createTime: 1570962664888
    }
  ]; */
};

// 获取博客详情
const getDetail = (id) => {
  if (id) {
    return {
      id: 1,
      title: '文章一',
      content: '文章内容，哈哈哈，好开心。',
      author: '刘武',
      createTime: 1570962664888
    };
  } else {
    return false;
  }
};

// 新增博客
const addBlog = (data) => {
  if (data.title && data.content) {
    return {
      id: 1,
      message: '新增博客成功'
    };
  } else {
    return false;
  }
};

// 修改博客
const updateBlog = (data) => {
  if (data.id && data.title && data.content) {
    return {
      id: 1,
      message: '更新成功'
    };
  } else {
    return false;
  }
};

// 删除博客
const delBlog = (id) => {
  if (id) {
    return {
      message: '删除成功'
    };
  } else {
    return false;
  }
};

module.exports = {
  getList,
  getDetail,
  addBlog,
  updateBlog,
  delBlog
};