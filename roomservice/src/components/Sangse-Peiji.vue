<template>
  <div class="black-bg" v-if="state==1">
  <div class='white-bg'>
    <img v-bind:src="products[i].image" alt="사진어디가">
    <h3>{{products[i].title}}</h3>
    <hr>
    <p>{{products[i].content}}</p>
    <button @click="상세페이지()">닫기</button>
  </div>
</div>
</template>

<script>
export default {
    props:["products","state","i"],
    methods:{
        상세페이지:function(){
            this.$emit('passI')
        }
    }
}
</script>

<style>

</style>