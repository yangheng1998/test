

<template>
    <div class="header"> 
        <div class='nav-topbar'>
            <div class="container">
                <div class="topbar-menu">
                    <!-- 在a标签中href属性中使用javascript 不会跳转到新的页面 -->
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" v-on:click='login'> 登录</a>
                    <!-- <a href="javascript:;" v-if="username" v-on:click='login'>{{username='' ? 注册 : 退出}} </a> -->
                    <a href="javascript:;" v-if="username" v-on:click='logout'>退出 </a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <!-- v-on:click == @click -->
                    <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车({{cartCount}})</a>
                </div>
            </div>
        </div>    
        <div class='nav-header'>
            <!-- 快捷写法  div.你所要写的class的名字 然后按tab自动弹出 -->
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                 </div>  

                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <!-- 循环用到了v-for 来循环 数组phoneList  加：key  将索引绑定上去-->
                                <!-- v-bind：== ：  -->
                                <li class="product" v-for="(item,index) in phoneList" :key="index" >
                                    <a v-bind:href="'/#/product/'+item.id " target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index" >
                                    <a v-bind:href="'/#/product/'+item.id " target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                             
                               
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="图片加载错误">
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="图片加载错误">
                                        </div>
                                        <div class="pro-name">小米全面屏电视E55A</div>
                                        <div class="pro-price">1999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt="图片加载错误">
                                        </div>
                                        <div class="pro-name">小米电视4A 32英寸</div>
                                        <div class="pro-price">699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt="图片加载错误">
                                        </div>
                                        <div class="pro-name">小米电视4A 55英寸</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt="图片加载错误">
                                        </div>
                                        <div class="pro-name">小米电视4A 65英寸</div>
                                        <div class="pro-price">2699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-6.png'" alt="图片加载错误">
                                        </div>
                                        <div class="pro-name">查看全部</div>
                                        <div class="pro-price">小米电视</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>    
                </div>

                <div class="header-search">
                        <div class="wrapper">
                            <input type="text" name="keyword">
                            <a href="javascript:;"> </a>
                        </div>
                </div>

                
            </div>
        </div> 
    </div>
</template>

<script>
import VueAxios from 'vue-axios';
import axios from 'axios';
import Vue from 'vue'
import {mapState} from 'vuex'

Vue.use(VueAxios,axios)
    export default {
        name:'nav-header',
        // 一定要定义局部data        全局的data容易造成数据的串用
        data(){
            return{
                phoneList:[]
            }
        },
        // 定义个过滤器 对price进行过滤
        filters:{
            currency(val){
                if(!val) return '0.00';
                return '¥' + val.toFixed(2) +'元' 
            }
        },

        computed:{
        /*username(){
            return this.$store.state.username;
        },
        cartCount(){
            return this.$store.state.cartCount;
        }*/
            ...mapState(['username','cartCount'])
        },

        // mounted 初始化调用这个方法
        mounted() {
            this.getProductList()
            let params = this.$route.params;
            if(params && params.from == 'login'){
                this.getCartCount();
            }
        },
        methods:{
            login(){
                this.$router.push('/login')
            },

            getProductList(){
                this.axios.get('/products',{
                    params:{
                        categoryId:'100012',
                    }
                }).then((res)=>{
                    // console.log(res)
                    // 如果请求的数组数必须大于6条    然后使用slice 截取 0 -6 之间的数
                    if(res.list.length>6){
                        this.phoneList =res.list.slice(0,6)
                    }
                })
            },

            goToCart(){
                // 使用下面的语句进行路由的跳转
                this.$router.push('/cart')
            },

            getCartCount(){
                this.axios.get('/carts/products/sum')
                .then((res=0)=>{
                    this.$store.dispatch('saveCartCount',res);
                })
            },
            
            logout(){

            }

             // logout(){
            //     this.axios.post('/user/logout').then(()=>{
            //     this.$message.success('退出成功');
            //     this.$cookie.set('userId','',{expires:'-1'});
            //     this.$store.dispatch('saveUserName','');
            //     this.$store.dispatch('saveCartCount','0');
            //     })
            // },
        },
           

    }
</script>



<style lang="scss">
@import url('../assets/scss/base.scss');
@import '../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  
// @import url('../assets/scss/mixing.scss');
    /* lang: 用来定于style的语法 */
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #B0B0B0;
            .container{
                // @include flex();
                display: flex;
                justify-content: space-between;
                align-items: center;
                a{
                    display: inline-block;
                    color: #B0B0B0B0;
                    margin-right: 17px;
                };
                .my-cart{
                    width: 110px;
                    background-color:#ff6600;
                    text-align: center;
                    color: #ffffff;
                    margin-right: 0;
                    .icon-cart{
                        display: inline-block;
                        width: 16px;
                        height: 12px;
                        background: url('/imgs/icon-cart-checked.png') no-repeat center;
                        background-size: contain;
                        margin-right: 4px;
                    }
                };
            };
        };
    };
    .nav-header{
       .container{
           position: relative;
           height:112px;
           display: flex;
           justify-content: space-between;
           align-items: center;

           .header-menu{
               display: inline-block;
               padding-left: 209px;
               width: 643px;
               .item-menu{
                   display: inline-block;
                   color:#333333;
                   font-weight: bold;
                   font-size: 16px;
                   line-height: 112px;
                   margin-right: 20px;
                   span{
                    //    该属性在鼠标移上去的时候会有一个小手
                       cursor: pointer;
                   };
                   &:hover{
                       color:$colorA;
                       .children{
                           height: 220px;
                            opacity: 1;
                       }
                   }
                   .children{
                       position: absolute;
                       top: 112px;
                       left: 0;
                       width: 1226px;
                       border-top: 1px solid #e5e5e5;
                       box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                       font-size: 12px;
                       line-height: 12px;
                       text-align: center;
                       opacity: 0;
                       z-index: 10;
                       height: 0;
                       transition: all .2s;
                       overflow: hidden;
                       background-color: #ffffff;
                       .product{
                           position: relative;
                           float: left;
                           width: 16.6%;
                           height: 220px;
                           a{
                               display: inline-block
                           };
                           img{
                               height:111px;
                               width: auto;
                               margin-top: 26px
                           }
                           .pro-img{
                               height: 137px;
                           }
                           .pro-name{
                               font-weight: bold;
                               margin-top: 19px;
                               margin-bottom: 8px;
                               color: $colorB;
                           }
                           .pro-price{
                               color: $colorA;

                           }
                           &::before{
                           content:' ';
                           position: absolute;
                           top: 28px;
                           right: 0;
                           border-left: 1px solid $colorF;
                           height: 100px;
                           width: 1px;
                            };
                           &:last-child:before{
                               display: none
                           }
                       }
                   }
               }
           };
           
           .header-logo{
               display: inline-block;
               width: 55px;
               height: 55px;
               background-color: #ff6600;
               a{
                   display: inline-block;
                   width: 110px;
                   height: 55px;
                   &::before{
                    //    因为痿是需要站位的所以如果需要使用则需要设置content为：‘ ’
                       content: ' ';
                       display: inline-block;
                       width: 55px;
                       height: 55px;
                       background:url('/imgs/mi-logo.png') no-repeat center;
                       background-size: contain;
                       transition: all .4s;
                   };
                   &::after{
                       content: ' ';
                       display: inline-block;
                       width: 55px;
                       height: 55px;
                       background:url('/imgs/mi-home.png') no-repeat center;
                       background-size: contain;
                   };
                   &:hover::before{
                       margin-left: -55px;
                       transition: margin .2s;
                   }
               }
           };
           
           .header-search{
               width: 319px;
               .wrapper{
                   height: 50px;
                   border: 1px solid #E0E0E0;
                   display: flex;
                   align-items: center;
                    input{
                        // border-right: 1px solid #e0e0e0;
                        border: none;
                        // 将其input规定为盒模型不包括padding值的
                        box-sizing: border-box;
                        width: 264px;
                        height: 50px;
                        padding-left: 14px;
                    }
                    a{
                        display: inline-block;
                        width: 18px;
                        height: 18px;
                        background: url('/imgs/icon-search.png') no-repeat center;
                        background-size: contain;
                        margin-left: 17px;
                    }

               }
           }

       }
    };

</style>