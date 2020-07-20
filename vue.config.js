module.exports = {
  lintOnSave: false, // 关闭eslint规则检查
  devServer: {
    open: true,
    proxy: {
      // 配置代理
      "/api": {
        // 只处理以/api开头的请求
        target: "http://localhost:3001", // 转发的目标地址
        changeOrigin: true, // 是否开启跨域
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
