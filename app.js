const Koa = require('koa');
const app = new Koa();
const routing = require('./app/routes')
const error = require('koa-json-error')
const parameter = require('koa-parameter')
const bodyBody = require('koa-body')

app.use(error()) // 错误处理返回
app.use(bodyBody()) // 解析 请求body中的 JSON
app.use(parameter(app)) // 参数校验，加入app的话，就能在全局使用了

// 连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://47.95.0.108:27017/zhu', {useNewUrlParser: true}, () => {
    console.log('连接成功')
})
mongoose.connection.on('error', console.error); // mongoose错误监听


routing(app) // 路由注册
app.listen(3000, () => console.log('http://localhost:3000'))