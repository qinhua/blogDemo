## nginx使用
nginx -t -c conf\nginx.conf 验证配置是否正确
start nginx 启动Nginx
nginx -s reload 配置文件修改重装载命令
nginx -s stop 快速停止或关闭
nginx -s quit 正常停止或关闭

## http-server
http-server ./ -a 127.0.0.10 -p 8001


nginx代理本地静态资源和接口，使用nginx的端口访问页面