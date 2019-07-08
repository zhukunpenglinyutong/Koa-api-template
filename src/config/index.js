let config = {}

// 开发环境配置
if (process.env.NODE_DEV === 'development') {
    config.port = 8081 // 端口配置
}

// 生产环境配置
if (process.env.NODE_DEV === 'production') {
    config.port = 80 // 端口配置
}

module.exports = config