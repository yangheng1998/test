<template>
  <div id="app">
    
    <router-view>
      
    </router-view>
    
  </div>
</template>

<script>

export default {
  name:'app',
  components:{

  },
  data(){
    return {
      
    }
  },
  // 生命周期 在其中发送异步请求
  mounted(){
    // storage.setItem('a',1)
    // 1、本地加载json文件请求
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res=res
    // })
    // 2、能够通过easymock
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res=res
    // })
    // 3、能够下载插件mockjs  进行加载 只不过他不会发送请求 但是能得到数据
    if(this.$cookie.get('userId')){
      this.getUser()
      this.getCartCount()
    }
    

  },
  methods: {
    // 获取用户者的数据
    getUser(){
      this.axios.get('/user').then(()=>{
        //  to-do  保存早 vuex 里面
        // this.$store.dispatch('saveUserName',res.name)
      })
    },
    // 获取购物车的数据
    getCartCount(){
      this.axios.get('/carts/products/sum').then(()=>{
        //
        // this.$store.dispatch('saveCartCount',res)
      })
    }
  },
}
</script>


<style lang="scss">

@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
@import './assets/scss/mixin.scss';

</style>



