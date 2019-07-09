const Koa = require('koa');
const app = new Koa();
const routing = require('./routes')
const error = require('koa-json-error')
const parameter = require('koa-parameter')
const bodyBody = require('koa-body')
const config = require('./config/index')

app.use(error()) // 错误处理返回
app.use(bodyBody()) // 解析 请求body中的 JSON
app.use(parameter(app)) // 参数校验，加入app的话，就能在全局使用了


// 连接数据库
const mongoose = require('mongoose')
mongoose.connect(`mongodb://${config.mongodb}`, {useNewUrlParser: true})
mongoose.connection.on('error', console.error); // mongoose错误监听

// 路由注册
routing(app)

// 启动Node服务
app.listen(config.port, () => console.log(`http://localhost:${config.port}`))