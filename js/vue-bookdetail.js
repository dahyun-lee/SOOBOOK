var model = {
  books : [
    {
      title: '사랑이라니 선영아',
      author:'김연수',
      src: 'http://books.google.com/books/content?id=3h7ZCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      bookTexts:[
        '[ p. 178 ] 심장이 하늘에서 땅까지 아찔한 진자운동을 계속하였다. 첫사랑이었다.',
      ],
      reviewTitle:'',
      reviewContent:''
    },
    {
      title: '스무살',
      author:'김연수',
      src: 'http://books.google.com/books/content?id=uB7ZCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      bookTexts:[
        '[ p. 178 ] 그렇다 그건 사랑이었다....ㅋㅋ',
      ],
      reviewTitle:'',
      reviewContent:''
    },
    {
      title: '낯선땅에 홀리다',
      author:'김연수',
      src: 'http://books.google.com/books/content?id=hgSitTlE5eYC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      bookTexts:[
        '낯선땅에 홀렸다..그렇다',
      ],
      reviewTitle:'',
      reviewContent:''
    },
    {
      title: '꽃심',
      author:'김연수',
      src: 'http://books.google.com/books/content?id=m5uxBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      bookTexts:[
        '꽃심...아 좋다',
      ],
      reviewTitle:'',
      reviewContent:''
    },
    {
      title: '원더보이',
      author:'김연수',
      src: 'http://books.google.com/books/content?id=TeeFAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      bookTexts:[
        '그는 원더보이였다',
      ],
      reviewTitle:'',
      reviewContent:''
    }
  ],
  selected_book: {
    title: '',
    author: '',
    src:'',
    bookTexts:'',
    reviewTitle:'',
    reviewContent:'',
  },
  showModal:false,
  newBookText: '',
  newReviewTitle:'',
  newReviewContent:'',

};



Vue.component('bookdetail-modal',{
  template:`
  <div class="modal is-active">
  <div class="modal-background" @click="$emit('close')"></div>
  <div class="modal-content">
   <slot></slot>
  </div>
  <button class="modal-close" @click="$emit('close')"></button>
</div>

  `
});
Vue.component('book-text',{
  template:`

  <li>
    {{text}}
    <button @click="$emit('remove')">X</button>
  </li>
  `,
  props:['text']

});

  var vm = new Vue({
    'el': '#app',
    data: model,
    methods: {
      selectedBook: function(book) {
        this.selected_book = book;
        return this.showModal = true;
      },
      encodingURI: function(link) {
      return window.encodeURI(link);
    },
      addNewText : function(){
        this.selected_book.bookTexts.unshift(this.newBookText);
        this.newBookText = '';
        // this.selected_book.bookTexts='';
    },
    addnewReview:function(){
      this.selected_book.reviewTitle = this.newReviewTitle.value;
      this.selected_book.reviewContent = this.newReviewContent.value;
    }
  }
});
