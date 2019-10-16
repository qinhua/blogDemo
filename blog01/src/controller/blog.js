const { exec } = require('../db/mysql')

// 获取博客列表
const getList = (author, keyword) => {
  let sql = `select * from blogs where isDel=0 `
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createTime desc;`
  return exec(sql)
};

// 获取博客详情
const getDetail = (id,isDel) => {
  return exec(`select * from blogs where id=${id} and isDel=${isDel||0}`).then(rows => {
    return rows[0]
  })
};

// 新增博客
const addBlog = (data) => {
  let sql = `insert into blogs (title,content,author,createTime) values ('${data.title}','${data.content}','${data.author}',${Date.now()});`
  return exec(sql).then(insertData => {
    return { id: insertData.insertId }
  })
};

// 修改博客
const updateBlog = (data) => {
  let sql = `update blogs set title='${data.title}',content='${data.content}',updateTime=${Date.now()} where id=${data.id};`
  return exec(sql).then(updateData => {
    return updateData.affectedRows > 0
  })
};

// 删除博客
const delBlog = (id, author) => {
  // 删除时需要加入author，确保数据安全性
  // let sql = `delete blogs where id=${id} and author='${author}';`//硬删除
  let sql = `update blogs set isDel=1 where id=${id} and author='${author}';`//软删除
  return exec(sql).then(delData => {
    return delData.affectedRows > 0
  })
};

module.exports = {
  getList,
  getDetail,
  addBlog,
  updateBlog,
  delBlog
};