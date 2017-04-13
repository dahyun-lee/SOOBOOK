<template>
  <div id="app" class="main-bg">
    <!-- <video src="assets/book.mp4" loop autoplay></video> -->
    <!-- <h1><abbr title="Single Page Application">SPA</abbr></h1> -->
    <router-view name="header"></router-view>
    <!-- <router-view name="main"></router-view> -->

    <transition name = "slide" mode="out-in">
      <!-- <router-view name="searchBar"></router-view>
      <router-view name="utility"></router-view> -->
      <router-view></router-view>
    </transition>


    <router-view name="footer"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',

  // components:{
  //   appNav : Navigation
  // },
  data () {
    return {

    }
  }
}
</script>

<style >

@import url( "http://fonts.googleapis.com/earlyaccess/notosanskr.css" );
[v-cloak] {
display: none;
}
*{
box-sizing: border-box;
}
html{
font-size: 14px;

}
body{
/*font-family: 'Spoqa Han Sans';*/
font-family: "Noto Sans KR", sans-serif;
margin: 0;
padding: 0;
}
.hidden{
position:absolute;
left:-9999em;
}
a{
text-decoration: none;
color: #fff;
}
ul,ol,li{
list-style: none;

}
ul,ol,li,figure{
margin:0;
padding: 0;
}
button,textarea{
font-family: inherit;
}
textarea{
padding:5px;
}


.logout:hover{
border-bottom: 2px dotted #e6ac17;
}
button{
border-style: none;
border-radius: 2px;
cursor: pointer;
}
/*video {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);

}*/

.bg-wrap {
width: 100%;
min-height: 100vh;
background: #f3f3f3;
}
.main-bg{
width: 100%;
min-height: 100vh;
background-image: url('assets/reading1.jpg');
background-position: center;
background-size: cover;
}
/*@keyframes background-scroll {
from{
  transform : translateY(0px);
}
to{
  transform : translateY(-200px);
}
}*/
.wrap-1200{
width: 1200px;
margin: 0 auto;
position: relative;
background: #f3f3f3;
}
header{
width: 1200px;
margin: 0 auto;
/*padding-bottom: 15px;*/

}

.header-wrap,.login-headerwrap{
background: hsla(200, 2%, 20%, 0.6);
border: 1px solid hsla(0, 0%, 100%, 0.1);
/*box-shadow: 5px 5px 5px #fff;*/
display: flex;
flex-direction: row;
margin: 0 auto;
padding:0.8rem 0;
justify-content: space-between;
}
.login-headerwrap{
background: #131418;
color: #fff;
}
.logo{
  display: inline;
}
.logo img{
color: #fff;
margin-top: 12px;
margin-left: 20px
}
.log-in{
display: flex;
float: right;
margin-right: 7px;
/*margin: 2rem;*/
}

.log-in a{
color:#fff;
}
input{
width: 14rem;
height: 2.6rem;
border-radius: 3px;
border-style: none;
border: 1px solid #c1d0d1;
padding-left: 1rem;
position: relative;
margin-right: 0.5rem;
top:2px;
}


/*회원가입 폼 모달*/

.signup-box{

color:#504d4f;
padding: 150px 30px;
text-align: center;
width: 600px;
margin: auto;

}
.signin-box{
  width: 600px;
  margin: auto;
  padding: 200px 30px;
}
.signin-box input {
  margin: 9px;
}
.signin-info p{
  text-align: center;
  color:#a5a7a6;
}
.signin-info span{
  font-weight: bold;
  text-decoration: underline;
  color:#a5a7a6;
}
.signup-header{
font-size: 2.5rem;
padding-bottom: 20px;
margin-top:0;
text-align: center;
border-bottom: 1px solid #64b9c8;

}

.signup-box label{
display: inline-block;
font-size: 1.5rem;
width: 150px;
line-height: 1.6;
margin: 10px;
text-align: left;
position: relative;
top:8px;
}
.signup-box input , .signin-box input {
text-align: left;
width: 250px;
}

.signin-btn,.signup-btn,.search-btn,.signup_submit_btn{
width:8rem;
height: 2.7rem;
border-radius: 3px;
background: #64b9c8;
color: #fff;
border-style: none;
vertical-align:middle;
margin-right: 0.3rem;
cursor: pointer;
}
.signin-btn{
  margin-top: 20px;
  margin-left: 50%;
  transform: translateX(-50%);
}
.signup_submit_btn{
margin-top: 30px;
margin-left:auto;
margin-right: auto;
}
.login_info{
font-size: 1.7rem;
color: #fff;
font-weight: 400;
position: relative;
top:-0.7rem;
/*float: right;*/
}
.slogan{
width: 600px;
font-size: 1.7rem;
font-weight: 400;
color: #fff;
position: absolute;
top:50%;
left: 37%;
transform: translateX(-50%) translateY(-50%);
/*font-family: 'Nanum Pen Script';*/
}

/*책장 첫화면*/
/*개인책장 초기 pape*/

.bookadd-box{
  position: relative;
  top:300px;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-flow:column;

}
.add-msg{
  font-size: 1.3rem;
  text-align: center;

}
.bookadd-btn{
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background: #64b9c8;
  color:#fff;
  font-size: 1.8rem;
  border-style: none;
  margin-left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}

/*구글 책검색 page*/
.booksearch-box{
  background-image: url(assets/cta-header.jpg);
  color:#fff;
}
.booksearch-inner{
  padding: 20px;
  width: 500px;
  margin:0 auto;
}
.booksearch-inner button{
  margin-left:50%;
  transform: translateX(-50%);
}
.booksearch-title{
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0;
}

.book-search{
  width: 1000px;
  margin: 0 auto;
  padding-top: 70px;
  text-align: center;
}
.search-input{
  width: 500px;
  height: 30px;
}
.search-btn{
  height: 31px;
}
.results{
  height: 340px;
  y-overflow: scroll;
  padding:30px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
/*.results figcaption{
text-align: center;
font-size: 1.5rem;
color:#8a8488;
}*/
.results img{
  margin: 10px;
  width:100px;
  height: 123.4px;
}
.picked-result{
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;
  /*background: #dfdbdb;*/
  height: 250px;
}
.picked-result img {
  width: 100px;
  height: auto;
  margin: 8px;
}
.booksave-btn{
  width: 200px;
  height: 50px;
  border-radius: 5px;
  background: #64b9c8;
  color:#fff;
  border-style: none;
  position: absolute;
  /*bottom:30px;*/
  margin-top: 10px;
  left:50%;
  transform: translateX(-50%);
  cursor: pointer;
}



.fade-enter-active{
  animation: fade-in 0.3s;
}

.fade-leave-active{
  animation: fade-out 0.3s;
}


.slide-enter-active{
  animation: slide-in 0.4s
}

.slide-leave{
  opacity: 1
}

.slide-leave-active{
    animation: slide-out 0.4s
}


@keyframes fade-in{
  from{opacity:0;}
  to{
    opacity: 1;
  }
  }
@keyframes fade-out{
  from{opacity: 1;}
  to{
    opacity: 0;
  }
}
@keyframes slide-in{
  from{
    transform: translateY(500px);
  }

  to{
    transform: translateY(-21px);
    opacity: 1;
  }
}
/*@keyframes slide-out{
  from{
    transform: translateY(0);
  }

  to{
    transform: translateY(-1040px);
    opacity: 0;
  }
  }*/
/*유틸리티바*/
.utility{
  background: #fff;
  /*border-bottom: 1px dotted #676b6b;*/
  box-shadow: 1px 1px 5px #a2a4a4;
  padding: 20px;
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index:100;}


.utility-inner{
  width:1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position:relative;
  padding: 0 20px;
}
.total-msg{
  font-size: 1.5rem;
  margin: 0;
}
.total-msg span{
  color: #f5225b;
  font-weight: 600;
}
.view-btn{
    background: transparent;
    border: none;
    margin: 5px;
    cursor: pointer;
}
/*.view-option{
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  margin-left: 10px;
  margin-top: 70px;
  margin-bottom: 10px;
}
.view-option button {
  background: transparent;
  border: none;
  margin: 5px;
  cursor: pointer;
}
select{
  width: 200px;
  margin-right: 10px;
  padding-left: 10px;
  border-radius: 3px;
}*/
/*select option{
  padding:5px;
}*/
.listbook-search{
  margin-right: 7px;
}
.listbook-search button{
  width: 36px;
  height: 36.38px;
  position: relative;
  top:3px;
  margin: -9px;
  background: #64b9c8;
  color: #fff;
  border-style: none;
  border-radius: 2px;
}
.booklist-edit{
  position: absolute;
  top:110px;
  right:85px;
}
.booklist-edit button{
  width:100px;
  height: 30px;
  background: #f41046;
  color:#fff;
  border-radius: 3px;
  border-style: none;
  font-size: 1.4rem;
  cursor: pointer;
}
.booklist-edit .plus-btn{
  background: #64b9c8;
}


  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #0c0001;
  }
  footer p{
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    color:#eee;
    margin: 0 auto;
  }



</style>
