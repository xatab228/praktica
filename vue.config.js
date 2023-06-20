const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.geojson$/,
          type: 'json',
        }
      ],
    },
  },
  chainWebpack: (config) => {
    config.module
        .rule('vue')
        .use('vue-loader')
        .tap((options) => {
          return {
            ...options,
            defineModel: true
          }
        })
  }
})
