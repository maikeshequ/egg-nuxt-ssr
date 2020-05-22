module.exports = {
  redis : {
    client: {
      port: 6379,
      host: '',
      password: '',
      db: 1,
    },
  },
  sequelize:{
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    database: '',
    username: '',
    password: '',
    timezone: '+08:00', // 时区
  },
  cluster : {
    listen: {
      path: '',
      port: 3000,
      hostname: '0.0.0.0', // localhost
    },
  },
  security : {
    csrf: {
      enable: true,
      ignoreJSON: false,
    },
    domainWhiteList: [ '*' ], // 跨域访问白名单
  }
}