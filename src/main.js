import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue';
import Parent from './Component/Parent.vue';
import Quote from './Component/Quote.vue';

Vue.component('app-home-component', Home);
Vue.component('app-Parent-Component', Parent);
Vue.component('app-quote-component', Quote);

new Vue({
  el: '#app',
  render: h => h(App)
})
