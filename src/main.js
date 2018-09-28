// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import fastClick from 'fastClick'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
Vue.use(ElementUI);
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
   render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
