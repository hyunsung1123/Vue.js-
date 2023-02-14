import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/* 위와 동일한 방법 .$mount('#app') == el : '#app'  
new Vue({
  el: '#app',
  components: {
    'app' : App
  }
})
*/

