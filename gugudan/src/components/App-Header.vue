<template>
  <div>
    <h1>랜덤한 2개의 숫자가 주어집니다.</h1>
    <hr>
    <h2> 곱한 값을 구해보세요! </h2>
    <hr>
    <h3>숫자1 : {{propsnum1}}</h3>
    <h3>숫자2 : {{propsnum2}}</h3>
    
    <form v-on:submit.prevent="SubmitForm">
        <input type="number" v-model="input">
        <button type="submit">입력</button>
    </form>
    <h1>정답 여부 : {{result_html}}</h1>
  </div>
</template>

<script>
export default {
    props: ['propsnum1','propsnum2','propsnum3'],
    data(){
        return{
            result_html:'',
            input : ''
        }
    },
    methods:{
        SubmitForm:function(){
            if(this.propsnum3 == this.input){
                this.$emit("pass");
                this.result_html="정답";
                this.input='';
            }
            else{
                this.input='';
                this.result_html="오답";
            }
        }
    }
}
</script>

<style>

</style>