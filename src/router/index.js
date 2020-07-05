import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

//解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: ()=>import('../components/common/Home'),
            meta: { title: '自述文件'},
            children: [
                {
                    path: 'demo1',
                    component:()=> import('../components/demo/demo1')
                },
                {
                    path:'/dashboard',
                    component:()=>import('../components/page/Dashboard'),
                    meta:{ title:'系统首页'}
                },
                {
                    path: '/table',
                    component: ()=>import('../components/page/BaseTable'),
                    meta: { title: '基础表格'}
                },
                {
                    path: '/tabs',
                    component: ()=>import('../components/page/Tabs'),
                    meta: { title: 'tab选项卡'}
                },
                {
                    path: '/form',
                    component: ()=> import('../components/page/BaseForm'),
                    meta: { title: '基本表单' }
                },
                {
                    //国际化组件
                    path: '/i18n',
                    component: ()=> import('../components/page/I18n.vue'),
                    meta: {title: '国际化' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: ()=> import('../components/page/BaseCharts'),
                    meta: { title: 'schart图表' }
                },
                {
                    path: '/icon',
                    component: ()=>import('../components/page/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/404',
                    component: ()=>import('../components/page/404')
                }

            ]
        },
        {
            path: '*',
            redirect: '/404'
        }

    ]
})