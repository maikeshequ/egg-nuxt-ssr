<template>
  <div class="container">
    <div>
      欢迎使用[麦壳社区] egg-nuxt-ssr 框架
    </div>
    <el-row>
      <el-col :span='6' :offset='9' style="margin-top:50px">
        <el-alert
          title="@ 联系邮箱  1411380024@qq.com"
          :closable="false"
          type="warning">
        </el-alert>
        <el-alert
          style='margin-top:20px;'
          title="@ 保定樱花谷网络科技有限公司"
          :closable="false"
          type="warning">
        </el-alert>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  components: {
  },
  data(){
    return {
      
    }
  },
  head: {
    title:'麦壳社区',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name:'keywords',content: '首页,麦壳社区,麦壳,樱花谷,樱花谷科技,软件开发,微信小程序,微信公众号,保定,软件'},
        { name:'description',content:'麦壳社区主要经营软件定制开发、微信小程序、微信公众号、APP、企业官网、ERP的研发；公司以客户第一-合作共赢为宗旨，旨在为客户提供软件一站式服务'},
        { name:'robots',content:'all'},
        { name:'author',content:'麦壳社区技术部'},
        { name:'copyright',content:'保定樱花谷网路科技有限公司版权所有'},
        { name:'renderer',content:'webkit'}
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
      ]
  }
}
</script>

<style>
  .container{
    text-align:center;
    width:100%;
    margin-top:100px;
    font-size:24px;
    color:#EA6F5A;
    margin-bottom:50px;
  }
</style>
