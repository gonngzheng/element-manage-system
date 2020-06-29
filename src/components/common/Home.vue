<template>
    <div>
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="container-box">
            <v-tags></v-tags>
        </div>
        <router-view></router-view>
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
            collapse: false
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
