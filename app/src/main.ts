import Vue from 'vue';
import store from '@/store/store';
import App from './components/app/App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
