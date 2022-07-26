const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  overlay: {
    warnings: false,
    errors: false,
  },
  devServer: {
    open: true,
    port: 8080,
  }
})