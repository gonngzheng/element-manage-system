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
                    //图片上传组件
                    path: '/upload',
                    component: ()=> import('../components/page/Upload.vue'),
                    meta: { title: '文件上传' }
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
                    //拖拽列表组件
                    path: '/drag',
                    component: ()=> import('../components/page/DragList.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    //拖拽Dialog组件
                    path: '/dialog',
                    component: ()=> import('../components/page/DragDialog'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import('../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/icon',
                    component: ()=>import('../components/page/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/403',
                    component: () => import('../components/page/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/404',
                    component: ()=>import('../components/page/404')
                }

            ]
        },
        {
            path: '/login',
            component: () => import('../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }

    ]
})