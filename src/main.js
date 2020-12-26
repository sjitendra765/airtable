import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faQuestionCircle, faWindowClose, faExpandArrowsAlt, faBell, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueDragResize from 'vue-drag-resize'
 
Vue.component('vue-drag-resize', VueDragResize)

Vue.use(BootstrapVue);
Vue.config.productionTip = false
library.add(faUser, faExpandArrowsAlt, faQuestionCircle, faWindowClose, faBell, faCompressArrowsAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  render: h => h(App),
}).$mount('#app')
