'use strict'; 

const { Controller } = require('egg'); 
  
class TestController extends Controller { 
  async index() {
    const { ctx } = this;
    ctx.body = '欢迎使用 [麦壳社区] EGG-NUXT框架';
  }
} 
  
module.exports =  TestController; 