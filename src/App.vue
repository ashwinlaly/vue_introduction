<template>
  <div id="app">
    {{msg}}
    <app-home-component></app-home-component>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>