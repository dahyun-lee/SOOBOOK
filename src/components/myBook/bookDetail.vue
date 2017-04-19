<template>
  <div class="bg-wrap">
    <div class="wrap-1200">
    <div class="selected_area" >
      <div class="books-info" v-for="item in items">
      <div>
      <img :src="item.book.cover_thumbnail" :alt="item.book.title">
      </div>
      <div class="info-text">
      <h3>{{item.book.title}}</h3>
      <p>저자 : {{item.book.author}}</p>
      <div class="rating">
      <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
    </div>
    </div>
      </div>
      <!-- 리뷰부분 -->
      <div class="review" v-for="item in items">
        <form action="#">
        <template v-if="show" >
        <textarea
        name="name"
        rows="10"
        cols="65"
        class="review-textarea"
        placeholder="책을 읽고 느낀 리뷰를 자유롭게 써주세요"
        v-model="item.comment[0].content"


        ></textarea>
        </template>

        <!-- 책리뷰 텍스트 공간 -->
        <div class="review-text" v-if="!show">

          <p
          class="review-content"
         :key= "item.comment[0].content"
          >{{item.comment[0].content}}</p>
        </div>

        <!--버튼  -->

        <button type="button" v-on:click="addnewReview" v-if="show" >저장하기</button>
        <div class="edit-set">
          <button v-if="!show" class="edit-btn" type="button" @click="show=true">수정</button>
          <button v-if="!show" class="delete-btn" type="button" @click="deleteReview">삭제</button>
        </div>

        </form>
    </div>
    <!-- 책속글귀 부분 -->
      <div class="book-phrase">
        <input
              v-model="items[0].mark.content"
              @keyup.enter = "addBookMark"
              type="text"
              class="bookmark"
              placeholder="기억에 남는 책속 글귀를 입력해주세요.">
        <button type="button" @click="addBookMark">입력</button>
        </div>
        <ul class="phrase-area" >
          <li
          v-for=" mark in items[0].mark"
          :key= "mark"

          >{{mark.content}}
          <button type="button" @click="deleteBookMark">x</button>
          <span>{{mark.update_date}}</span>
        </li>
        </ul>
    </div>
  </div>
</div>

</template>
<script>
export default {
  name: "",
  data: function data() {
    return {
      items: [ ],
      bookid:'',
      show : !true,

    }
  },
  mounted(){
    var _this = this;
    var items = this.items;
    var bookid = this.bookid;
    var token = 'Token ' + getCookie('SoobookToken');
    // console.log('book_id:',this.book_id);
    $.ajax({
      url: "https://soobook.devlim.net/api/book/mybook/detail/?bookid=" + bookid ,
      dataType: "	json",
      type: "GET",
      data:{
        bookid: this.$route.params.id
      },
      headers: {
        Authorization: token,
      },
      success: function(data) {
        // var mybooks = data.results.book;
        console.log('성공 :', data);
        console.log('디테일 :', data);
        for(var i = 0; i< data.length; i++){
        console.log(data[i]);
        items.push(data[i]);
      }
    },
      error: function(error){
        console.error('실패..:', error);
        console.log('data:',data);
      }
    })


  },
  methods: {
  addBookMark : function(){
    var mark = document.querySelector('.bookmark').value;
    var token = 'Token ' + getCookie('SoobookToken');
    var items = this.items;
    $.ajax({
        url: "https://soobook.devlim.net/api/book/mark/",
        type: 'POST',
        headers: {
          Authorization: token,
        },
        dataType: "json",
        data: {
          mybook_id: items[0].mybook_id,
          content: mark
        }
    })
    .done(function(response) {
        console.log('mark add 성공', response);
        items[0].mark[0].content = mark;
        mark = '';
      })
    .fail(function(response) {
        console.log('fail', response);
        console.log('items', items);

    });


      // this.selected_book.bookTexts='';
  },
  deleteBookMark(){
    var items = this.items;
    var token = 'Token ' + getCookie('SoobookToken');
    $.ajax({
        url: "https://soobook.devlim.net/api/book/mark/",
        type: 'DELETE',
        headers: {
          Authorization: token,
        },
        dataType: "json",
        data: {
          mark_id: items[0].mark[0].id
        }
    })
    .done(function(response) {
        console.log('done', response);
      })
    .fail(function(response) {
        console.log('fail', response);
        console.log('deleteMark', items[0].mark[0].id);
    });
  },
  addnewReview(mybook_id,content){
    var review = document.querySelector('.review-textarea').value;
    var token = 'Token ' + getCookie('SoobookToken');
    var items = this.items;
    $.ajax({
        url: "https://soobook.devlim.net/api/book/comment/",
        type: 'POST',
        headers: {
          Authorization: token,
        },
        dataType: "json",
        data: {
          mybook_id: items[0].mybook_id,
          content: review
        }
    })
    .done(function(response) {
        console.log('done', response);
      })
    .fail(function(response) {
        console.log('fail', response);
        console.log('items', items);

    });
    this.show = !true;
  },
  deleteReview:function(){
    var items = this.items;
    var token = 'Token ' + getCookie('SoobookToken');
    $.ajax({
        url: "https://soobook.devlim.net/api/book/comment/",
        type: 'DELETE',
        headers: {
          Authorization: token,
        },
        dataType: "json",
        data: {
          comment_id: items[0].comment[0].id
        }
    })
    .done(function(response) {
        console.log('done', response);
        items.comment[0].content='';

      })
    .fail(function(response) {
        console.log('fail', response);
        console.log('items', comment);
    });

    // items.comment[0].content = '';

  },

}


}
</script>
<style>
</style>
