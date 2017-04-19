<template>

      <ul class="book-list">
            <li

            class="bookList"
            v-for="item in items">

            <i class="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
            <router-link :to="{name:'detail', params:{id: item.book.id}}" tag="a" >
              <div class="bookListL">
                <img :src="item.book.cover_thumbnail" class="bookCover">
              </div>
            </router-link>
              <div class="bookListR">
                  <h5 class="bookTitle">{{item.book.title}}</h5>
                  <p class="bookAuthors">{{ item.book.author }}</p>
                  <!-- <p>{{ item.starRating }}</p> -->
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                <p class="bookReview">{{ item.book.comment }}</p>
                <p class="bookSaveDate">{{ item.updated_date }}</p>
              </div>

            </li>
          </ul>

</template>
<script>
export default {
  name: "listView",
  data: function() {
    return {
      items: []  ,
    }
  },
  methods: {
      textCut(txt ,len) {
      if (len == "" || len == null) {
             len = 8;
         }
        if (txt.length > len) {
            txt = txt.substr(0, len) + '...';
        }
        return txt;
      },


  },

   mounted() {
     var _this = this;
     var items = this.items;
     var token = 'Token ' + getCookie('SoobookToken');
     // console.log('book_id:',this.book_id);
     $.ajax({
       url: "https://soobook.devlim.net/api/book/mybook/",
       dataType: "	json",
       type: "GET",
       headers: {
         Authorization: token,
       },
       success: function(data) {
         // var mybooks = data.results.book;
         console.log('성공 :', data);
         console.log('책리스트 :', data.results);
         for(var i = 0; i< data.results.length; i++){
         console.log(data.results[i]);
         console.log('comment',data.results[i].comment)
         items.push(data.results[i]);
       }
     },

       error: function(error){
         console.error('실패..:', error);
         console.log('data:',data);
       }
     })
     var bookReviews = document.querySelectorAll('.bookReview');
     var bookTitles = document.querySelectorAll('.bookTitle');
     // console.log(bookReviews);
     for (var i = 0; i < bookReviews.length; i++) {
       // console.log(bookReviews[i].textContent);
       var bookReviewCut = this.textCut(bookReviews[i].textContent, 50);
       // console.log(bookReviewCut);
       bookReviews[i].textContent = bookReviewCut;
     }

     for (var i = 0; i < bookTitles.length; i++) {
       var bookTitleCut = this.textCut(bookTitles[i].textContent);
       bookTitles[i].textContent = bookTitleCut;
     }
    }
}
</script>
<style>





/*메인페이지2*/
.mainTop{
  margin: 30px 0;
}
.bookViewTop, .mainTop{
  display: flex;
  justify-content: space-between;
}
.book-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 40px 20px;

}
.bookList:hover{
  transform: translateY(-5px);
  transition: 0.5s ease-in;
}
.bookList{
  width: 45%;
  display: flex;
  margin: 30px 0px;
  padding: 10px;
  background: white;
  border-radius: 1px;
  box-shadow: 2px 1px 1px 0px lightgray;
  position: relative;
  /*border-left: 10px solid #ececec;*/
  border-left: 7px solid #ececec;
  /*border-left: 30px solid red;*/
}
.fa-ellipsis-v{
  position: absolute;
  right: 10px;
  font-size: 2rem;
  color: rgba(94, 87, 60, 0.6);
}
.bookListL{
  /*position: relative;*/
  padding-top: 30px;
  text-align: center;
}
.bookCover{
  box-shadow: 2px 2px 2px 0px gray;
  width: 142px;
  height: 213px;
}
.bookTitle{
  /*padding-top: 170px;*/
  font-size: 1.4rem;
  color: #181818;
  margin: 10px 0;
}
.bookAuthors{
  color: #888;
  font-family: 'Iropke Batang', serif;
  margin: 15px 0;
}
.bookReview{
  color: #999;
  font-family: 'Iropke Batang', serif;
  line-height: 2rem;
  margin: 20px 0;
}
.bookSaveDate{
  color: #888;
  font-family: 'Iropke Batang', serif;
  margin: 2px 0;
  padding-top: 5px;
  border-top: 1px solid #ccc;
}
.fa-star{
  color: rgb(249, 207, 57);
}
.bookListL{
  width: 30%;
}
.bookListR{
  width: 70%;
  padding: 15px;
}
.viewWay{
  border: 0;
  background: #f9f9f9;
  cursor: pointer;
}
.bookViewBottom{
  margin: 30px 0;
}
.listViewBook{
  width: 30%;
  text-align: center;
}
.bookStorage{
  margin-top: 20px;
}
.pager{
  height: 150px;
  padding-top: 10px;
}
.pageNumber{
  display: inline-block;
  border: 1px solid #ccc;
  line-height: 2.2rem;
  padding: 0 10px;
  border-radius: 3px;
}





</style>
