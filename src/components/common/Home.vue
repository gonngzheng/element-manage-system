<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse': collapse}">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>



</template>

<script>
import vHead from './Header'
import vSidebar from './Sidebar'    
import vTags from './Tags'    
import bus from './bus'    
export default{
    data(){
        return{
            collapse: false,
            tagsList: []
        }
    },
    components: {
        vHead,
        vSidebar,
        vTags
    },
    created(){
        bus.$on('collapse-content', msg=>{
            this.collapse= msg;
        })
    }
}
</script>
