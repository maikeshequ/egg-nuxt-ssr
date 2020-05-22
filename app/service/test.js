'use strict';

const {Service} = require('egg')

class TestService extends Service {
  async test(){
    return ''
  }
}

module.exports = TestService