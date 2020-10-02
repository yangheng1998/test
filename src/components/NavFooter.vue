

<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="400">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="javascript:;" target="_blank">河畔一脚主页</a><span></span>
            <a href="javascript:;" target="_blank" >Vue全栈课程</a><span> </span>
            <a href="javascript:;" target="_blank">React全家桶课程</a><span></span>
            <a href="javascript:;" target="_blank">微信支付专项课程（H5+小程序+Node+Mango）</a><span></span>
            
        </div>
        <div class="Copyright">© mi.com 京ICP证110507号 <span class="domain">京ICP证110507号</span> 京网文[2020]0276-042号</div>
    </div>
</template>

<script>



    export default {
        name:'nav-footer'
    }
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
@import '../assets/scss/config.scss';

    .footer{
        height: 234px;
        border-top: 4px solid #ff6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        top: 50%;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;

            }
            span{
                margin: 0 10;
            }
            margin-bottom: 13px;
        }
        .Copyright{
            .domain{
                color: #ff6600
            }
        }
    }
</style>