<template>
  <div>
    <div class="bg-wrap">
      <div class="wrap-1200">
        <div class="book-search">
          <input v-model="search" type="text" class="search-input" @keyup.enter="searchTerm" placeholder="책이름, 저자, 출판사 를 입력해주세요">
          <button type="button" @click="searchTerm" class="search-btn">책 검색</button>
        </div>
        <div class="searchResults">
          <div class="results">
              <div class="resultsBookList" v-for="post in posts" :id="post.id" @click="movingBook">
                <img :src="post.cover_thumbnail" :alt="post.title">
                <div class="resultsBookListP">
                  <h3 class="resultsTitle">{{post.title | cropTitle}}</h3>
                  <p class="resultsAuthor">{{post.author}}</p>
                </div>
              </div>
            <!--App.vue에 있는  results에서 padding, height 값 지움. -->
          </div>
          <div id="hiddenMenu" class="hiddenArea">
            <button type="button" class="hiddenMenuBar" @click="toggleMenu">선택된 책 목록</button>
            <button type="button" class="hiddenMenuButton" @click="lookMenu"><i class="fa fa-angle-double-left fa-2x" aria-hidden="true"></i></button>
            <div class="resultsRight">
              <div class="picked-result">
                <!--App.vue에 있는  picked-result값 다 지움(이 파일 밑에서  설정) -->

                <!-- <router-link to="/mybook"> -->
                  <button type="button" class="booksave-btn" @click="addBooks">저장</button>
                  <!--App.vue에 있는  booksave-btn에서 가운데 정렬하는 값, position 지움. -->
                <!-- </router-link> -->
              </div>
            </div>
          </div>
        </div>


  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      search: '',
      posts: [],
      post:[]
    }
  },
  filters: {
    cropTitle(value) {
      if (value.length < 7) {
        return value;
      } else {
        return value.substr(0, 7) + '...';
      }
    }
  },
  methods: {
    searchTerm(){
      var _this = this;
      var search = this.search;
      // axios.get("https://soobook.devlim.net/api/book/search/?keyword=" + search)
      //      .then(function(response) {
      //          return response.json();
      //      })
      //      .then(function(data) {
      //
      //      })
      $.ajax({
        url: "https://soobook.devlim.net/api/book/search/?keyword=" + search,
        dataType: "json",
        success: function(data){
          _this.search = '';
          _this.posts = data.results;
        },
        type: 'GET'
      });
    },
    addBooks(){
      var PickedBook = document.querySelector('.picked-result');
      var resultsBook = PickedBook.querySelectorAll('.resultsBookList');
      var id = this.id;
      // var book_id = this.book_id
      console.log('resultsBook:', resultsBook);
      for (var i = 0; i < resultsBook.length; i++) {
        console.log('resultsBook[i].id:', resultsBook[i].id);
        var book_id = resultsBook[i].id;
        // console.log('book_id:',book_id);
        console.log('this:',this);
        this.book_id = book_id;
      };
      var token = 'Token ' + getCookie('SoobookToken');
      console.log('book_id:',this.book_id);
      $.ajax({
        url: "https://soobook.devlim.net/api/book/mybook/",
        dataType: "	json",
        type: "POST",
        data: {
          book_id: this.book_id
        },
        headers: {
          Authorization: token,
        },
        success: function(data) {
          console.log('성공 :', data);
        },
        error: function(error){
          console.error('실패..:', error);
          console.log('data:',data);
        }
      })
      // function getCookie(c_name) {
      //   var i,x,y,ARRcookies=document.cookie.split(";");
      //   for (i=0;i<ARRcookies.length;i++) {
      //     x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      //     y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      //     x=x.replace(/^\s+|\s+$/g,"");
      //     if (x==c_name) {
      //       return unescape(y);
      //     }
      //   }
      // }
    },
    movingBook(e){
      console.log(e.target.parentNode);
      var targetbook, pickArea, clonebook;
      targetbook = e.target.parentNode;
      // console.log(targetbook.parentNode.getAttribute('class'));
      pickArea = document.querySelector('.picked-result');
      clonebook = targetbook.cloneNode(true);
      // clonebook.setAttribute('onclick','removeBook');
      clonebook.insertAdjacentHTML('beforeend','<button onclick="removeBook">안녕</button>');
      console.log(clonebook);
      pickArea.appendChild(clonebook);
    },

    lookMenu(){
      var toggleMenu, togglebtn;
      toggleMenu = document.querySelector('#hiddenMenu');
      if(toggleMenu.className === "hiddenArea"){
        toggleMenu.setAttribute('class', 'hiddenAreaMb-active');
        togglebtn = document.querySelector('.fa-angle-double-left');
        togglebtn.outerHTML = '<i class="fa fa-angle-double-right fa-2x" aria-hidden="true"></i>';
      }else{
        toggleMenu.setAttribute('class', 'hiddenArea');
        togglebtn = document.querySelector('.fa-angle-double-right');
        togglebtn.outerHTML = '<i class="fa fa-angle-double-left fa-2x" aria-hidden="true"></i>';
      }
    },
    toggleMenu(){
      var toggleMenu, toggleMenu_active;
      toggleMenu = document.querySelector('#hiddenMenu');
      if(toggleMenu.className === "hiddenArea"){
        toggleMenu.setAttribute('class', 'hiddenArea-active');
        // toggleMenu.style.animation = "toggle-up 2s ease-in-out"
      }else{
        toggleMenu.setAttribute('class', 'hiddenArea');
      }
    }

  }
}
</script>
<style>
.bg-wrap{
  position: relative;
  overflow: hidden;
}
.wrap-1200{
  min-height: 100vh;
}
.searchResults{
  /*display: flex;*/
}
.results{
  width: 70%;
  max-height: 500px;
  margin-top: 20px;
}
.resultsRight{
  width: 100%;
  min-height: 100vh;
  background: white;
}
.booksave-btn{
  display: block;
  margin: 0 auto;
}
.resultsBookList{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
  height: 270px;
  margin: 10px;
  border:1px solid #ccc;
  /*box-shadow:0 1px 1px;*/
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
.picked-result{
  min-height: 100vh;
  width: 90%;
}
.hiddenMenuButton{
  display: none;
}
.hiddenMenuBar{
  margin-top: 105px;
  width: 35px;
  height: 220px;
  border-radius: 7px 0 0 7px;
  color: white;
  background: #64b9c8;
  text-align: center;
}
#hiddenMenu{
  display: flex;
  position: absolute;
  top:0;
}
.hiddenArea{
  width: 30%;
  /*right: -27.5%;*/
  right: -37.5%;
  animation: toggle-out 0.7s ease-in-out;
}
.hiddenArea-active{
  width: 30%;
  right: -10%;
  animation: toggle-in 0.7s ease-in-out;
}
.hiddenAreaMb-active{
  width: 80%;
  right: 0%;
  animation: toggle-in 0.7s ease-in-out;
}
.picked-result div{
  /*display: inline-block;*/
  width: 60%;
  height: 270px;
  margin: 10px auto;
}
</style>
