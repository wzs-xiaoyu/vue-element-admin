const path = require('path');
const webpack = require('webpack')
const aresConfig = require('./ares.config');
const { protocol, ip, port, context } = aresConfig.server;
const serverAddress =`${protocol}://${ip}:${port}/${context}/`;
const argv = require('yargs').argv;
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports={
  configureWebpack: config =>{
    config.devtool = 'source-map'
    let plugins = []
    config.plugins = [...config.plugins, ...plugins]
  },
  devServer: {
    open: true,
    // host: 'localhost ',
    // port: 8080,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的proxy: {//配置跨域
    proxy:{
      '/api':{
        target: serverAddress,//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changeOrigin: true,//允许跨域
        pathRewrite: {
          '^/api ': '/api ' //请求的时候使用这个api就可以
        }
      }
    }
  },
  chainWebpack(config){
    config.resolve.alias
      .set('@components', resolve('src/components'))
      .set('@common', resolve('src/common'))
      .set('@api', resolve('src/api'))
    config.plugin('context')
      .use(webpack.ContextReplacementPlugin,[/moment[/\\]locale$/,/zh-cn/])
  },
  css:{
    sourceMap: true,
    loaderOptions:{
      postcss: {
        plugins:[
          require('autoprefixer')({})
        ]
      }
    }
  },
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'? './' : '/'
  // publicPath: process.env.NODE_ENV === 'production'? '/acmww/' : '/',
  // outputDir:'acmww'
}
