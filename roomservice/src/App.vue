<template>
<main>
<!-- 상단의 메뉴바 -->
<AppHeader v-bind:menus="menus"/>
<!-- 상세페이지 모달창 -->
<transition name="fade">
<sangsePeiji 
v-bind:products="products"
v-bind:state="state"
v-bind:i="i"
@passI="SangsePageLook"/>
</transition>
<!-- 메인 화면 -->
<MainPage v-bind:products="products"
@신고="신고"
@passValue="SangsePageLook"
@pass="priceLow"
@pass1="priceHigh"
@pass2="sortABC"
@pass3="sortBack"
@pass4="pricesetting"
@setting="setting"
@name="namesetting"
@search="serach"
:buttonstate="buttonstate"/>

  </main>
</template>

<script>
import products from './assets/oneroom.js';
import AppHeader from './components/App-Header.vue';
import SangsePeiji from './components/Sangse-Peiji.vue';
import MainPage from './components/Main-Page.vue';

export default {
  name: 'App',
  components : {
    AppHeader,
    SangsePeiji,
    MainPage
  },
  data(){
    return {
      menus: ['Home','Shop','Abouts'],
      products: products,
      state:0,
      i : 0,
      productsOriginal: [...products],
      buttonstate:[0,0,0,0,0],
      set :0,
      name:'',
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
    setting:function(value){
      this.set=value
    },
    namesetting:function(value){
      this.name=value
    },
    //낮은 가격순 정렬.
    //sort(function(a,b){return a-b }); 
    priceLow:function(value){
      for(var index=0; index<this.buttonstate.length; index++){
        this.buttonstate[index] =0
      }
      this.buttonstate[value]=1
      this.products.sort(function(a,b){
        return a.price - b.price
      });

    },
    priceHigh:function(value){
      for(var index=0; index<this.buttonstate.length; index++){
        this.buttonstate[index] =0
      }
      this.buttonstate[value]=1
      this.products.sort(function(a,b){
        return b.price - a.price
      });
    },
    sortABC:function(value){
      for(var index=0; index<this.buttonstate.length; index++){
        this.buttonstate[index] =0
      }      
      this.buttonstate[value]=1
      this.products.sort(function(a,b){
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      })
    },
    sortBack:function(value){
      // 
      for(var index=0; index<this.buttonstate.length; index++){
        this.buttonstate[index] =0
      }
      this.buttonstate[value]=1
      this.products = [...this.productsOriginal];
    },
    pricesetting:function(value){
      // 
      for(var index=0; index<this.buttonstate.length; index++){
        this.buttonstate[index] =0
      }
      this.buttonstate[value]=1
      this.products = [...this.productsOriginal].filter((products) => products.price <= this.set)
    },
    serach:function(){
      this.products = [...this.productsOriginal].filter((products) => products.title.indexOf(this.name)!=-1)    
    }
  }
}
</script>
<style>
/* 1초 동안 투명도를 변화 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s,transform 1s;;
}
/* 더 이상 보이게 되지 않았을 때의 투명도 */
.fade-enter {
  opacity: 0;
  transform: translateX(-100px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-1000px);
}



body{
  margin:5%;
}
div {
  box-sizing: border-box;
}
.article {
  text-align:center;
}
.black-bg {
  width: 90%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; 
  padding: 20px;
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
  cursor: pointer;
  transition: all 1s ease-out;

}
.search{
  font-size:20px;
}
#search_form{
  margin:30px 10px 0px 50px;
  text-align: right;

}
#search_form .searchbutton{
  margin-left:10px;
   font-size:20px;
  
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
  font-size: 20px;
  color:white;
  padding: 10px;
}
.hr{
  margin-top: 5%;
}
.button{
  text-align: center;
}
.btn{
  margin:30px 10px 0px 50px;
  width:auto;
  border:none;
  background: white;
  font-size:20px;
  font-weight:bold;
  color: darkslateblue;
  cursor: pointer;
}
.버튼클릭{
  margin:30px 10px 0px 50px;
  width:auto;
  border:none;
  padding:5px;
  background: darkslateblue;
  font-size:20px;
  font-weight:bold;
  color: white;
  cursor: pointer;
  border-radius:5%;
}
.button input{
  font-size:20px;
}
</style>