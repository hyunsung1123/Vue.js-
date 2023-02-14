<template>
  <div>
    <h1>랜덤한 2개의 숫자가 주어집니다.</h1>
    <hr>
    <h2> 곱한 값을 구해보세요! </h2>
    <hr>
    <h3>숫자1 : {{num1}}</h3>
    <h3>숫자2 : {{num2}}</h3>
    
    <form v-on:submit.prevent="SubmitForm">
        <input type="number" v-model="input" ref="answer">
        <button type="submit">입력</button>
    </form>
    <h1>정답 여부 : {{result_html}}</h1>
    <h3>정답 횟수 : {{count}} </h3>
    <h3>틀린 횟수 : {{wrongcount}}</h3>
  </div>
</template>

<script>
export default {
    data(){
        return{
            num1:Math.ceil(Math.random()*10),
            num2:Math.ceil(Math.random()*10),
            count:0,
            wrongcount:0,
            result_html:'',
            input : ''
        }
    },
    computed : {
    result : function(){
      return this.num1 * this.num2
        }
    },
    methods:{
        SubmitForm:function(){
            if(this.result == this.input){
                this.num1 = Math.ceil(Math.random()*10)
                this.num2 = Math.ceil(Math.random()*10)
                this.count ++; 
                this.result_html="정답";
                this.input='';
                this.$refs.answer.focus()
            }
            else{
                this.wrongcount ++;
                this.input='';
                this.result_html="오답";
            }
        }
    }
}
</script>

<style>

</style>