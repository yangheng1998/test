<template>
    <div class="index">
        <div class="container">
            <!-- 实现轮播的 -->
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children"> 
                                <ul v-for="(item,i) in menuList" :key="i">
                                    <li v-for="(sub,index) in item" :key="index">
                                        <a :href="sub? '/#/product/'+sub.id : ' ' ">
                                            <img :src="sub? sub.img : 'imgs/item-box-1.png'" alt="404">
                                            {{sub? sub.name : '小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                         <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                            
                        </li>
                         <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                            
                        </li>
                         <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                            
                        </li>
                         <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                            
                        </li>
                         <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                            
                        </li>
                         <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                            
                        </li>
                         <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                            
                        </li>
                    </ul>
                </div>


                <!-- v-bind : 用于绑定方式在style 和class中 -->
                <swiper v-bind:options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
                        <a v-bind:href="'/#/product/'+item.id"><img v-bind:src="item.img"></a>
                    </swiper-slide>
                    
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>


        <service-bar></service-bar>
    </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
 import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'

export default {


    name:'index',

    components:{
        ServiceBar,
        swiper,
        swiperSlide,
    },
    data(){
        return{
            swiperOption:{
                autoplay:true,
                loop:true,
                effect:'cube',
                cubeEffect: {
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
               pagination: {
                    el: '.swiper-pagination',
                    clickable:true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
                },
            slideList:[
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                    
                },
                 {
                    id:'45',
                    img:'/imgs/slider/slide-2.jpg'
                },
                 {
                    id:'46',
                    img:'/imgs/slider/slide-3.jpg'
                },
                 {
                    id:'43',
                    img:'/imgs/slider/slide-4.jpg'
                },
                 {
                    id:'44',
                    img:'/imgs/slider/slide-5.jpg'
                },
            ],
            menuList:[
                [
                    {
                        id:30,
                        img:'/imgs/item-box-1.png',
                        name:'小米cc9'
                    },
                    {
                        id:31,
                        img:'/imgs/item-box-2.png',
                        name:'小米8青春版'
                    },
                    {
                        id:30,
                        img:'/imgs/item-box-3.jpg',
                        name:'Redmi K20 Pro'
                    },
                    {
                        id:30,
                        img:'/imgs/item-box-4.jpg',
                        name:'移动4G +专区'
                    }
                ],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
            ]
        }
    }


}
</script>

<style lang="scss">
// lang  用来定义style 的语法

@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';

.index{
    .swiper-box{
        .nav-menu{
            // Z-index 仅能在定位元素上奏效（例如 position:absolute;） 元素优先级高的在上面
            position: absolute;
            background-color: #55585a7a;
            width: 264px;
            height: 460px;
            z-index: 9;
            padding: 26px 0 ;
            box-sizing: border-box;     //添加盒模型后就会不会在height 的基础上添加  padding的值了
            .menu-wrap{
                .menu-item{
                    height: 50px;
                    line-height: 50px;
                    a{
                        display: block;   //让a标签填充满
                        position: relative;
                        font-size: 16px;
                        color: #ffffff;
                        padding-left: 30px;
                        &::after{
                            position: absolute;
                            right: 30px;
                            top:17.5px;
                            content: ' ';
                            @include bgImg(10px,15px,'/imgs/icon-arrow.png')
                        }
                    }
                    &:hover{
                        background-color: $colorA;
                        .children{
                            display:block;
                        }
                    }
                    .children{
                        display: none;
                        width: 962px;
                        height: 460px;
                        background-color: $colorG;
                        z-index: 1;
                        position: absolute;
                        top:0;
                        left: 264px;
                        border: 1px solid $colorH;
                        ul{
                            display: flex;
                            justify-content: space-between;   //两端对齐
                            height: 75px;
                            li{
                                height: 75px;
                                line-height: 75px;    //定义文字 垂直方向居中  就用lineheight 
                                flex: 1;
                                padding-left: 23px
                            }
                            a{
                                color: $colorB;
                                font-size: 15px;
                                
                            }
                            img{
                                width: 42px;
                                height: 25px;
                                vertical-align: middle;    //能够让图片盒居中
                                margin-right:15px; 
                            }
                        }
                    }
                }
            }
        }

        .swiper-container{
            height: 451px;
            .swiper-button-prev{
                left:274px;
            }
            img{
                width: 100%;
            }
        }
    }
}
    
</style>