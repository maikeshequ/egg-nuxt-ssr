/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path')
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589959108371_8503';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  
  // 日志文件
  config.logger = {
    dir: path.resolve(__dirname, '../logs/server'),
    appLogName: 'app.log',
    coreLogName: 'core.log',
    agentLogName: 'agent.log',
    errorLogName: 'error.log',
  };
  // 请求参数配置
  config.bodyParser = {
    enable: true,
    jsonLimit: '1000mb',
    formLimit: '1000mb',
    encoding: 'utf8',
    enableTypes: [ 'json', 'form', 'text' ],
    extendTypes: {
      text: [ 'text/xml', 'application/xml' ],
    },
  };
  config.multipart = {
    mode: 'file',
    whitelist: [
      '.png',
      '.jpg',
      '.doc',
      '.dwg',
      '.docx',
      '.jpeg',
      '.webp',
    ],
  };
  return {
    ...config,
    ...userConfig,
  };
};
