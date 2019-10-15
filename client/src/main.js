import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'

import http from './http'


Vue.prototype.$http = http;//将http引入vue的原型链中，使得其他地方可以从vue的示例中获取到http的方法

Vue.config.productionTip = false
Vue.use(ElementUI);//引入element-ui组件，这是完整引入了element-ui的组件，我们也可按需引入，减少发布包的大小

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
