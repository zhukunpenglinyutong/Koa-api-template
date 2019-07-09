const path = require('path');
const fs = require('fs')
const Koa = require('koa');
const app = new Koa();
const error = require('koa-json-error') // 错误处理插件
const parameter = require('koa-parameter') // 解析URL参数
const bodyBody = require('koa-body') // 解析请求体
const logger= require('koa-morgan') // 日志插件
const routing = require('./routes') // 路由文件
const config = require('./config/index') // 配置

app.use(error()) // 错误处理返回
app.use(bodyBody()) // 解析 请求body中的 JSON
app.use(parameter(app)) // 参数校验，加入app的话，就能在全局使用了


// 日志（开发环境，打印在console.log）
if (process.env.NODE_DEV === 'development') app.use(logger('dev'));
// 日志（上线环境，打包在logs目录下）
if (process.env.NODE_DEV === 'production') {
    const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), { flags: 'a' })
    app.use(logger('combined', { stream: accessLogStream }))
}

// 连接数据库
const mongoose = require('mongoose')
mongoose.connect(`mongodb://${config.mongodb}`, {useNewUrlParser: true})
mongoose.connection.on('error', console.error); // mongoose错误监听

// 路由注册
routing(app)

// 启动Node服务
app.listen(config.port, () => console.log(`http://localhost:${config.port}`))