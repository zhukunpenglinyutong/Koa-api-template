let config = {}

// 开发环境配置
if (process.env.NODE_DEV === 'development') {
    config.port = 3000 // 端口配置
    config.mongodb = '57.95.0.108:27017/zhu' // MongoDB连接地址
}

// 生产环境配置
if (process.env.NODE_DEV === 'production') {
    config.port = 80 // 端口配置
    config.mongodb = '57.95.0.108:27017/zhu' // MongoDB连接地址
}

module.exports = config