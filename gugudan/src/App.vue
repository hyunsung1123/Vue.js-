<template>
  <AppHeader
  v-bind:propsnum1="num1"
  v-bind:propsnum2="num2"
  v-bind:propsnum3="result"
  v-on:pass="clear"/>
</template>

<script>
import AppHeader from "./components/App-Header.vue";
export default {
  components:{
    AppHeader
  },
  data : function(){
    return{
      num1:Math.ceil(Math.random()*10),
      num2:Math.ceil(Math.random()*10),
    }
  },
  computed : {
    result : function(){
      return this.num1 * this.num2
    }
  },
  methods:{
    clear:function(){
      this.num1 = Math.ceil(Math.random()*10),
      this.num2 = Math.ceil(Math.random()*10)
    }
  }
 
}
</script>

<style>

</style>