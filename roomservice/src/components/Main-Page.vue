<template>
    <div>
        <h1>대연동 원룸 리스트</h1>
        <hr>
        <br>
        <div v-for="(item,index) in products" v-bind:key="index" class="article">
        <img @click="상세페이지1(index) " v-bind:src="item.image" alt="사진이 안나온다" class="room-img"/>
        <div>
            <h2>{{index+1}}번  {{item.title}} 
            <p> {{item.price}} 만원 </p> 
            </h2>
        </div>
        <button @click="신고(item)" 
        @mouseover="item.ButtonState= 1" 
        @mouseleave="item.ButtonState=0" 
        :class="item.ButtonState ? '신고버튼에마우스올림' : '신고'">
        허위 매물 신고 </button>
        <span style="font-weight:bold"> 신고수: {{item.count}} </span>
        <hr>
    </div>
  </div>
</template>

<script>
export default {
    props:["products"],
    methods:{
        신고:function(item){
            this.$emit("Declaration",item.count++)
        },
        상세페이지1:function(index){
            this.$emit('passValue',index);
        }
    }
}
</script>

<style>

</style>