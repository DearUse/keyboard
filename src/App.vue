<template>
  <div id="app">
    <button @click='aa'>Pay</button>
    <input type="text" v-model='tel' readonly="value">
    <vuePayKeyboard ref='keyboard' @inputNum="listenValue"></vuePayKeyboard>
  </div>
</template>

<script>
require('./lib/flexible.js');
import vuePayKeyboard from './lib/vue-pay-keyboard.vue'
export default {
  components: {vuePayKeyboard},
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tel : '',
      }
  },
  munted(){

  },
  methods:{
    aa(){
      this.$refs.keyboard.upKeyWin();
    },
    listenValue(value){
      this.tel = value;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
