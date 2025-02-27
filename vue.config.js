module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
     chainWebpack: config => {
    config.module.rule('images')
      .use('file-loader')
      .tap(options => ({
        name: 'assets/[name].[hash:8].[ext]',
      }));
  },
    // Force Babel to transpile the @faker-js/faker package
    transpileDependencies: ['@faker-js/faker'],
    chainWebpack: (config) => {
      // Ensure Babel processes .mjs files in the faker package
      config.module
        .rule('js')
        .test(/\.(js|mjs)$/)
        .include.add(/node_modules[\\\/]@faker-js[\\\/]faker/).end()
        .use('babel-loader')
        .loader('babel-loader')
        .end();
    },
  };
  
