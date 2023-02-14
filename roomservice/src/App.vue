<template>
<main>
<!-- 상단의 메뉴바 -->
<the-discount/>
<div class="menu">
  <a href="" v-for="menu in menus" :key="menu">{{menu}}</a>
</div>
<!-- 상세페이지 모달창 -->
<div class="black-bg" v-if="state==1">
  <div class='white-bg'>
    <img v-bind:src="products[i].image" alt="사진어디가">
    <h3>{{products[i].title}}</h3>
    <hr>
    <p>{{products[i].content}}</p>
    <button @click="상세페이지()">닫기</button>
  </div>
</div>
<!-- 메인 화면 -->
  <div>
  <h1>대연동 원룸 리스트</h1>
  <hr>
  <br>
  <div v-for="(item,index) in products" v-bind:key="index" class="article">
    <img @click="상세페이지(),i=index" v-bind:src="item.image" alt="사진이 안나온다" class="room-img"/>
    <div><h2>{{index+1}}번  {{item.title}} <p> {{item.price}} 만원 </p> </h2></div>
    <button @click="신고(index)" @mouseover="item.ButtonState= 1" 
    @mouseleave="item.ButtonState=0" :class="item.ButtonState ? '신고버튼에마우스올림' : '신고'">
    허위 매물 신고 </button>
    <span style="font-weight:bold"> 신고수: {{item.count}} </span>
    <hr>
  </div>
  </div>
  <br>
  <div><button @click="반값()">반값 할인 행사!!!!</button></div>
  <div><button @click="원상복구()">두배 증가 행사!!!!</button></div>
</main>
</template>

<script>
import products from './assets/oneroom.js';
import TheDiscount from './components/Discount.vue'
export default {
  name: 'App',
  components : {
    TheDiscount
  },
  data(){
    return {
      menus: ['Home','Shop','Abouts'],
      products: products,
      state:0,
      i : 0
    }
  },
  methods:{
    신고:function(index){
      this.$set(this.products[index],"new",this.products[index].count ++);
    },
    반값:function(){
      var a = this.products;
      this.products.forEach(function(value,index) {
        a[index].price = a[index].price /2 ;
      })
      },
      원상복구:function(){
      var a = this.products;
      this.products.forEach(function(value,index) {
        a[index].price = a[index].price *2 ;
      }) 
      },
      상세페이지:function(){
        if(this.state==1){
          this.state=0
        }
        else{
          this.state=1
        }
      },
    }
}

</script>

<style>

div {
  box-sizing: border-box;
}
.article {
  text-align:center;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
  text-align:center;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
.white-bg img{
  width:90%;
  margin-top:40px;
}
.신고{
  font-weight:bold;
  color:white;
  border:none;
  font-size:20px;
  padding:10px;
  margin-right:20px;
  background-color:red;
  border-radius:10px;
}
.신고버튼에마우스올림{
  font-weight:bold;
  color:red;
  border:none;
  font-size:20px;
  padding:10px;
  margin-right:20px;
  background-color:yellow;
  border-radius:10px;

}

.room-img{
  width:70%;
  margin-top:40px;
}
h1{
  text-align: center;
}
hr{
  width:auto;
}
ul { 
  margin: 0 auto; 
  width: 1000px; 
  border: 1px solid #aaa;
  }

ul li{ 
  margin: 4px 0;
  }

.menu{
  text-align: right;
  background: darkslateblue;
  padding:15px;
  border-radius: 5px;
}
.menu a{
  font-size: 25px;
  color:white;
  padding: 10px;
}

</style>