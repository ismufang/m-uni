// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/HPImageArchive.aspx': {
                target: 'https://www.bing.com',
                "changeOrigin": true, //是否跨域
                "secure": false // 设置支持https协议的代理
            }
        },
    }
}