<template>
    <div class="tags" v-if="showTags">
        <!-- <ul>
            <li class="tags-li" v-for="(item,index) in tagsList" :class="{'active': isActive(item.path)}" :key="index">
                <router-link :to="item.path" class="tags-li-title">
                    {{item.title}}
                </router-link>
                <span class="tags-li-icon" @click="closeTags(index)">
                    <i class="el-icon-close"></i>
                </span>
            </li>
        </ul> -->
    </div>
</template>

<script>
// import bus from './bus';
export default {
    data(){
        return {
            tagsList: []
        }
    },
    // methods: {
    //     isActive(path){
    //         return path === this.$route.fullPath;
    //     },
    //     //关闭单个标签
    //     closeTags(index){
             
    //     }
    // },
    computed: {
        showTags(){
            return this.tagsList.length > 0;
        }
    },
    created(){
        
    }
}
</script>

