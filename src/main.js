import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Element from 'element-ui';
import VueI18n from 'vue-i18n'
import { messages } from './components/common/i18n'
import 'element-ui/lib/theme-chalk/index.css'; //默认主题
import './assets/css/icon.css'
Vue.config.productionTip = false
Vue.use(VueI18n);
Vue.use(Element,{
  size: 'small',
  zIndex: 3000
})
const i18n = new VueI18n({
  locale:'zh', //语言标识
  messages
})
new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
