<template>
  <div>
    <h1>랜덤한 2개의 숫자가 주어집니다.</h1>
    <hr>
    <h2> 곱한 값을 구해보세요! </h2>
    <hr>
    <h3>숫자1 : {{propsnum1}}</h3>
    <h3>숫자2 : {{propsnum2}}</h3>
    
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
    props: ['propsnum1','propsnum2','propsnum3','count','wrongcount'],
    data(){
        return{
            result_html:'',
            input : ''
        }
    },
    methods:{
        SubmitForm:function(){
            if(this.propsnum3 == this.input){
                this.$emit("correct");
                this.result_html="정답";
                this.input='';
                this.$refs.answer.focus()
            }
            else{
                this.$emit("wrong");
                this.input='';
                this.result_html="오답";
            }
        }
    }
}
</script>

<style>

</style>