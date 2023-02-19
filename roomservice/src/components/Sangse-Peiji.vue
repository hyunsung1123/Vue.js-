<template>
  <div class="black-bg" v-if="state">
  <div class='white-bg'>
    <img v-bind:src="products[i].image" alt="사진어디가">
    <h3>{{products[i].title}}</h3>
    <hr>
    <p>{{products[i].content}}</p>
    <input @input="changeKeyword" v-bind:value="months">
    <p>{{months}}개월을 입력하셨습니다.</p>
    <h3>총 가격 : {{products[i].price *months}} ₩</h3> 
    <button @click="상세페이지()">닫기</button>
  </div>
</div>
</template>

<script>
export default {
    props:["products","state","i"],
    data(){
      return{
        months : ''
      }
    },
    methods:{
        상세페이지:function(){
            this.months = ''
            this.$emit('passI')
        },
      changeKeyword(e){
			this.months = e.target.value;
		},
    },
    watch: {
      months(input){
        if (isNaN(input) == true){
          alert("숫자만 입력하셔야합니다.");
          this.months = "";
        }
        if (input > 36){
          alert("최대 36개월까지만 선택 가능합니다.");
          this.months = 36;
        }
        else if (input < 1){
          alert("최소 1개월은 선택해야합니다.")
          this.months = "";
        }

      }
    },
}
</script>

<style>

</style>