'use strict';
const { Nuxt, Builder } = require('nuxt');
const config = require('./nuxt/nuxt.config.js');

class AppBootHook {
  constructor(app) {
    this.app = app;
  }
  async serverDidReady() {
    const json_params = JSON.parse(process.argv[2])
    if(json_params['asyncdb']){
      console.log(this.app)
      console.log(this.app.model)
      await this.app.model.sync({ alter: true });
    }else{
      config.dev = this.app.env !== 'production';
      const nuxt = new Nuxt(config);
      await nuxt.ready();
      if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
      }
      this.app.use(ctx => {
        ctx.status = 200;
        ctx.respond = false; // Bypass Koa's built-in response handling
        ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
        nuxt.render(ctx.req, ctx.res);
      });
    }
  }
}

module.exports = AppBootHook;
