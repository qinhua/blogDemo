const mysql = require('mysql')

// 创建链接对象
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3399,
    database: 'myblog'
})

// 开始连接
connection.connect()

// 执行 sql 语句
// const sql = 'select * from blogs;'

const sql = "insert into users (username,password,realname) values ('lzk','123456','卢子康');"

connection.query(sql, (err, res) => {
    if (err) {
        console.error(err);
        return
    }
    console.log(res);
})