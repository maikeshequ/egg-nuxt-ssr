'use strict';
const path = require('path');
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/public/image/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    './styles/index.css',
    'font-awesome/css/font-awesome.min.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'@/plugins/element-ui'},
    {src:'@/plugins/baidumap',ssr:false} // 引入了百度地图API，
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [ /^element-ui/ ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  },
  srcDir: path.join(__dirname),
  rootDir: path.dirname(__dirname,'../'),
};
