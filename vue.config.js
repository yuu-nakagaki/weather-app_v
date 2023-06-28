module.exports = {
    outputDir: 'docs',
    publicPath: '/weather-app_v/',
    assetsDir: './',
    configureWebpack: {
        output: {
          publicPath: '/weather-app_v/'
        }
      }
}