<template>
  <div class="bg-wrap">
    <div class="wrap-1200">
    <div class="selected_area">
      <div class="books-info">
        <div>
      <img :src="selected_book.cover_thumbnail" :alt="selected_book.title">
      </div>
      <div class="info-text">
      <h3>{{selected_book.title}}</h3>
      <p>저자 : {{selected_book.author}}</p>
      <div class="rating">
      <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
    </div>
    </div>
      </div>
      <!-- 리뷰부분 -->
      <div class="review">
        <form action="#">
        <template v-if="show">
        <textarea
        name="name"
        rows="10"
        cols="65"
        placeholder="책을 읽고 느낀 리뷰를 자유롭게 써주세요"
        v-model="selected_book.newComment"


        ></textarea>
        </template>

        <!-- 책리뷰 텍스트 공간 -->
        <div class="review-text" v-if="!show">

          <p
          class="review-content"
         :key= "selected_book.comment"
          >{{selected_book.comment}}</p>
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
              v-model="newMark"
              @keyup.enter = "addNewText"
              type="text"
              placeholder="기억에 남는 책속 글귀를 입력해주세요.">
        <button type="button" @click="addNewText">입력</button>
        </div>
        <ul class="phrase-area" >
          <li
          v-for=" text in selected_book.mark"
          :key= "text"
          @remove= "selected_book.mark.splice(index,1)"
          >{{text}}</li>
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
      items: [
        {
         "book":{
         id: "x_5KAQAAIAAJ",
         title: "개",
         author:"김훈",
         cover_thumbnail: "http://books.google.com/books/content?id=x_5KAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
       },
        "comment": " ",
        "newComment": " ",
        "star": " ",
        "mark":
          [ "블라블라"],
      }
     ],
     selected_book: {
         title: '개',
         author: '김훈',
         cover_thumbnail:'http://books.google.com/books/content?id=x_5KAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
         mark:['안녕하세요',],
         newComment:'',
         comment:'',
      },
      show : true,
      newMark:'',
    }
  },
  methods: {
  addNewText : function(){
      this.selected_book.mark.unshift(this.newMark);
      this.newMark = '';

      // this.selected_book.bookTexts='';
  },
  addnewReview:function(){
    this.selected_book.comment = this.selected_book.newComment;
    this.show = !true;
  },
  deleteReview:function(){
    this.selected_book.comment='';
    this.selected_book.newComment='';

  },

}


}
</script>
<style>
</style>
