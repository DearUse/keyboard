import Vue from 'vue'
import App from './App.vue'
//引入
import areaSelect from './lib/index.js' 
Vue.use(areaSelect)

new Vue({
  el: '#app',
  render: h => h(App)
})
