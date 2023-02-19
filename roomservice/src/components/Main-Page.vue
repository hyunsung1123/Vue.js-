<template>
    <div id="items">
        <h1>대연동 원룸 리스트</h1>
        <hr>
        <form @submit.prevent="oneroomsearch" id="search_form">
            <input type="text" @input="oneroominput" v-bind:value="name" placeholder="원룸명을 써주세요." class="search">
            <button class="searchbutton">검색</button>
        </form>
        <div class="button">
        <button :class="buttonstate[0] ? '버튼클릭' :'btn'"  @click="titleSort()">가격낮은순정렬</button>
        <button :class="buttonstate[1] ? '버튼클릭' :'btn'"  @click="titleSort1()">가격높은순정렬</button>
        <button :class="buttonstate[2] ? '버튼클릭' :'btn'"  @click="titleSort2()">가나다순정렬</button>
        <button :class="buttonstate[3] ? '버튼클릭' :'btn'"  @click="titleSort3()">원래대로</button>
        <button :class="buttonstate[4] ? '버튼클릭' :'btn'"  @click="titleSort4()">최대가격설정</button>        
        <input @input="changeKeyword" v-bind:value="setting" placeholder="최대값을 써주세요.">
        </div>
        <br>
        <hr>
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
        <hr class="hr">
    </div>
  </div>
</template>

<script>
export default {
    props:["products","buttonstate"],
    data:function(){
        return{
            setting:'',
            name:''
        }
    },
    methods:{
        신고:function(item){
            this.$emit("Declaration",item.count++)
        },
        상세페이지1:function(index){
            this.$emit('passValue',index);
        },
        titleSort:function(){
            this.$emit("pass",0)
        },
        titleSort1:function(){
            this.$emit("pass1",1)
        },
        titleSort2:function(){
            this.$emit("pass2",2)
        },
        titleSort3:function(){
            this.$emit("pass3",3)
        },
        titleSort4:function(){
            this.$emit("pass4",4)
        },
        changeKeyword(e){
			this.setting = e.target.value;
            this.$emit("setting",e.target.value)
		},
        oneroominput(e){
            this.name = e.target.value;
            this.$emit("name",e.target.value)
        },
        oneroomsearch:function(){
            this.$emit("search")
        }

    },

}
</script>

<style>

</style>