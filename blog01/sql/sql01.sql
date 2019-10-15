-- select version();

-- use myblog;

-- insert into blogs (title,content,author) values('标题','这是一段文字','张三');

-- select * from blogs;

-- select title,content from blogs;

-- select * from blogs where title='天真蓝' or id=1;

-- select * from blogs where title='你真甜';

-- select * from blogs where content like '%文字%';

-- select * from blogs where title like '%真%' order by id desc;

-- select * from blogs where title like '%真%' order by id asc;


-- SET SQL_SAFE_UPDATES = 0;

-- update blogs set title='我好美' where title='标题'

-- delete from blogs where title='我好美';

-- select * from blogs;

-- insert into blogs (title,content,author) values('我很美','相信自己的力量','华仔');

-- 软删除
-- update blogs set isDel=1 where title='我很美';

-- select * from blogs where isDel<>0;

-- update blogs set isDel=0;

-- select * from blogs;



-- insert into users (username,password,realname) values('qinhua','123456','覃华');

-- select * from users;