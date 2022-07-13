const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    //配置代理
    devServer: {
        proxy: {
            "/api": {
                // target: "http://112.126.66.32:6666",
                target: "http://localhost:6666",
                // pathRewrite: {"^/api" : ""}
            }
        },
        //解决history模式刷新找不到首页
        historyApiFallback: {
            index: '/index.html' //与output的publicPath
        },

    }
})