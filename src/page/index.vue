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
                                            <img v-lazy="sub? sub.img : 'imgs/item-box-1.png'" alt="404">
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
                        <a v-bind:href="'/#/product/'+item.id"><img v-lazy="item.img"></a>
                    </swiper-slide>
                    
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>

            <div class="ads-box">
                <!-- key 用来缓存组件来使用 是减脂对 -->
                <a :href="'/#/product/' +item.id " v-for="(item,index) in adsList" :key="index">
                    <img v-lazy="item.img" alt="404">
                </a>
            </div>

            <div class="banner">
                <a href="/#/product/30">
                    <img v-lazy="'/imgs/banner-1.png'" alt="404">
                </a>
            </div>   
        </div>

         <div class="product-box">
                <div class="container">
                    <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/35"><img v-lazy="'/imgs/mix-alpha.jpg'" alt="404"></a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(arr,i) in phoneList" :key="i">
                            <div class="item" v-for="(item,index) in arr" :key="index">
                                <span :class="{'new-pro':index%2==0}">新品</span>
                                <div class="item-img">
                                    <img v-lazy="item.mainImage" alt="404">
                                </div>
                                <div class="item-info">
                                    <h3>{{item.name}}</h3>
                                    <p>{{item.subtitle}}</p>
                                    <!-- 在标签上添加点击事件 为 @click =‘ 需要调用的方法’ -->
                                    <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>


        <service-bar></service-bar>
        <modal 
            title="提示" 
            sureText='查看购物车' 
            btnType='1' 
            modalType='middle'  
            :showModal='showModal'
            @submit="goToCart"
            @cancel='showModal=false'
            >
            <template v-slot:body>
               <p>商品添加成功</p>
            </template>
        </modal>
    </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
 import { swiper, swiperSlide } from 'vue-awesome-swiper'
 import Modal from './../components/Modal'
  import 'swiper/swiper-bundle.css'

export default {

    name:'index',

    components:{
        ServiceBar,
        swiper,
        swiperSlide,
        Modal,

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
            ],
            adsList:[
                {
                    id:33,
                    img:'/imgs/ads/ads-1.png'
                },
                  {
                    id:48,
                    img:'/imgs/ads/ads-2.jpg'
                },
                  {
                    id:45,
                    img:'/imgs/ads/ads-3.png'
                },
                  {
                    id:47,
                    img:'/imgs/ads/ads-4.jpg'
                },
            ],
            phoneList:[],
            showModal:false,

        }
    },
    
    mounted() {

        this.init()
        
    },
    methods:{
        init(){
            this.axios.get('/products',{
                param:{
                    categoryId:100012,
                    // pageSize:14
                }
            }).then((res)=>{
                // slice()不会改变元素组 对数组进行分割
                // splice（）他会改变元素的一个对象
                
                var phoneList2=[] 
                phoneList2=res.list.slice(6,14);
                
                this.phoneList = [phoneList2.slice(0,4),res.list.slice(4,8)];
                
            })
        },
        addCart(){
            this.showModal =true
            
            // this.axios.post('/carts',{
            //     productId:id,
            //     selected:true
            // }).then(()=>{

            // }).catch(()=>{
            //     this.showModal =true;
            // })
        },
        goToCart(){
            this.$router.push('/cart')
        }
    }


}
</script>

<style lang="scss">
// lang  用来定义style 的语法

@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/base.scss';

.index{
    .swiper-box{
        .nav-menu{
            // Z-index 仅能在定位元素上奏效（例如 position:absolute;） 元素优先级高的在上面
            position: absolute;
            background-color: #55585a7a;
            width: 264px;
            height: 451px;
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
                        height: 451px;
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
    .ads-box{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-top:14px;
        margin-bottom:31px;
        a{
            width:296px;
            height:167px;
        }
    }
    .banner{
        margin-bottom: 50px;
    }
    .product-box{
        // $ == 多乐
        background-color: $colorJ;
        padding: 30px 0 50px;
        h2{
            font-size: 22px;
            height: 21px;
            line-height: 21px;
            color: $colorB;
            margin-bottom: 20px;
        }
        .wrapper{
            display: flex;
            .banner-left{
                margin-right: 16px;
                img{
                    width:224px;
                    height:619px;
                }
            }
            .list-box{
                .list{
                    
                    @include flex();
                    width: 986px;
                    margin-bottom: 14px;
                    // & ==  切日 符号来控制最后一个元素 
                    &:last-child{
                        margin-bottom: 0
                    }
                    .item{
                        width: 236px;
                        height: 302px;
                        background-color: $colorG;
                        text-align: center;
                        span{
                            // 他是一个行内元素 没有宽高  设置不了颜色  给他设置一个宽高
                            display: inline-block;
                            width: 67px;
                            height: 24px;
                            font-size: 14px;
                            line-height: 24px;
                            color: #ffffff;
                            // 使用的新品
                            &.new-pro{
                                background-color: #7ecf68;
                            }
                            &.kill-pro{
                                background-color: #e82626;
                            }
                        }
                       .item-img{
                            img{
                            width:100%;
                            height:195px;
                            }
                        }
                        .item-info{
                            h3{
                                color: #333333;
                                font-size: 14px;
                                line-height: 14px;
                                font-weight: bold;
                            }
                            p{
                                color: $colorD;;
                                line-height: 13px;
                                margin:6px auto 13px;
                            }
                            .price{
                                color: #f20a0a;
                                font-size: 14px;
                                // 下面属性进行加粗
                                font-weight: bold;
                                cursor: pointer;
                                &::after{
                                    content: ' ';
                                    @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                                    margin-left: 5px;
                                    // 下面的属性能够让文字和图片进行居中
                                    vertical-align: middle;
                                }
                            }
                        }
                    }








                }
            }
        }
    }

}
    
</style>