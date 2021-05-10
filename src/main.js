import Vue from 'vue';
import App from './App.vue'
import router from "./router"
import store from "./store"
import ExtendComponents from './components'
import { get,post } from './common/js/service'
import waterMark from './common/js/waterMark'
// UI 框架
import ElementuI from 'element-ui'
import { Icon,Button,Select,Option,Menu,Submenu,MenuItem, Container,Header,Aside,Main,Dropdown,DropdownMenu,DropdownItem} from "element-ui";
[Icon,Button,Select,Option,Menu,Submenu,MenuItem, Container,Header,Aside,Main,Dropdown,DropdownMenu,DropdownItem].forEach(comp => Vue.use(comp));
import './common/style/theme/index.css'
import 'nprogress/nprogress.css'
// 按需引入 echarts 5.x
import echarts from './common/js/echartsUI'

Vue.config.productionTip = false

Vue.use(ExtendComponents)
// Vue.use(ElementuI)
Vue.use(waterMark)
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
