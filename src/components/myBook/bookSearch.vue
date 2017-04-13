<template>
   <div>
    <div class="bg-wrap">
      <div class="wrap-1200">
        <div class="book-search">
      <input class="search-input" type="text" @keyup.enter="searchTerm" placeholder="책이름, 저자, 출판사 를 입력해주세요">
      <button class="search-btn" type="button" @click="searchTerm">책 검색</button>
    </div>
    <div class="results" >

    </div>
    <div class="picked-result" >

    </div>
    <router-link to="/mybook"><button type="submit" class="booksave-btn">저장</button></router-link>


  </div>
</div>
</div>


  <!-- <div id="app">
    <input type="text" class="search-input">
    <button v-on:click="searchTerm">책 검색</button>
    <div class="results"></div>
  </div> -->

</template>
<script>
export default {
  name: 'app',
  data: function () {
    return {
      // posts: []
    }
  },
  methods: {
    searchTerm(){
      var search = document.querySelector('.search-input').value;
      var results = document.querySelector('.results');
      document.querySelector('.results').innerHTML = "";
      $.ajax({
        url: "https://soobook.devlim.net/api/book/search/?keyword=" + search,
        dataType: "json",

        success: function(data){
          for(var i=0; i<data.results.length; i++){
            var bookInfo = [
              '<div class="resultsBookList">',
              '<img src="' + data.results[i].cover_thumbnail + '">',
              '<div class="resultsBookListP">',
              '<h3>' + data.results[i].title + '</h3>',
              '<p>' + data.results[i].author + '</p>',
              '</div>',
              '</div>'
            ].join('');
            results.innerHTML += bookInfo;
          }
        },
        type: 'GET'
      });
    }
  }
}
</script>
<style>
.resultsBookList{
  display: flex;
  width: 25%;
  margin-bottom: 15px;
  padding: 5px;
  /*border:1px solid #ccc;*/
  /*box-shadow:0 1px 1px;*/
  border-radius: 5px;
}
.resultsBookListP{
  margin-left: 10px;
}
</style>
