import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue';
import Parent from './Component/Parent.vue';

Vue.component('app-home-component', Home);
Vue.component('app-Parent-Component', Parent);

new Vue({
  el: '#app',
  render: h => h(App)
})
