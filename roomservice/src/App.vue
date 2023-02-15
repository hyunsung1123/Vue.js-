<template>
<main>
<!-- 상단의 메뉴바 -->
<TheDiscount/>
<AppHeader v-bind:menus="menus"/>
<!-- 상세페이지 모달창 -->
<sangsePeiji 
v-bind:products="products"
v-bind:state="state"
v-bind:i="i"
@passI="SangsePageLook"/>
<!-- 메인 화면 -->
<MainPage v-bind:products="products"
@신고="신고"
@passValue="SangsePageLook"/>
</main>
</template>

<script>
import products from './assets/oneroom.js';
import TheDiscount from './components/Discount.vue';
import AppHeader from './components/App-Header.vue';
import SangsePeiji from './components/Sangse-Peiji.vue';
import MainPage from './components/Main-Page.vue';

export default {
  name: 'App',
  components : {
    TheDiscount,
    AppHeader,
    SangsePeiji,
    MainPage
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
      SangsePageLook:function(value){
        console.log(value);
        this.i = value;
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
  width:50%;
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