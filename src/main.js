import Vue from 'vue'
import App from './App'
import mpvueToastRegistry from 'mptoast/src/registry'
import Tips from './config/tips'
import store from './store'
Vue.prototype.$store = store
mpvueToastRegistry(Vue)
Vue.prototype.$tips = Tips
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
