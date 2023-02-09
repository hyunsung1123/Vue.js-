<template>
  <AppHeader
  v-bind:propsnum1="num1"
  v-bind:propsnum2="num2"
  v-bind:propsnum3="result"
  v-bind:count="count"
  v-bind:wrongcount="wrongcount"
  v-on:correct="clear"
  @wrong="wrong"/>
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
      count:0,
      wrongcount:0
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
      this.count ++;
    },
    wrong:function(){
      this.wrongcount ++;
    }
  }
 
}
</script>

<style>

</style>