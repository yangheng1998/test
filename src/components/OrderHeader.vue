
<template>
    <div class="order-header"> 
        <div class="container clearfix" >
            <div class="header-logo">
                    <a href="/#/index"></a>
            </div>  

            <div class="title">
                <h2>{{title}} <slot name="tip"></slot></h2>
            </div>

            <div class="username">
                <a href="javsscript:;">{{username}}</a>
            </div>
            

        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

    export default {
        name:'order-header',

        props:{
            title:String
        },
        // vue 的计算属性
        computed: {
            // mapstate 他是一个用来监控自己定义的变量 
            ...mapState(['username'])
        },
    }
</script>

<style lang="scss" >


    .order-header{
        padding: 30px 0 ;
        border-bottom: 2px solid #ff6600;

        .container{
            .title,.username{
                display: inline-block;
                height: 55px;
                line-height: 55px;
            }
            .title{
                
                float: left;
                margin-left: 54px;
                h2{
                    font-size: 28px;
                    color: #333333;
                }
                span{
                    font-size: 14px;
                    margin-left: 17px;
                    color: #999999;
                    font-weight: 200;
                }
            }
            .username{
                float: right;
                a{
                    color: #666666;
                    font-size: 16px;
                }
            }

            .header-logo{
            //    display: inline-block;
               float: left;
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
        }
    }
</style>