<template>
    <div>
        
        <nav-header></nav-header>
        <router-view> </router-view>
        <nav-footer></nav-footer>
        
    </div>
</template>

<script>

import NavFooter from './../components/NavFooter'
import NavHeader from './../components/NavHeader'

export default {
    name:'nav-home',
    // components:加载多个数组使用 components
    components:{
        NavHeader,
        NavFooter,
    }
   
}
</script>

