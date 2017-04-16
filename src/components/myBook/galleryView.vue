<template>

    <div class="my-bookshelf" >
      <!-- <div class="wrap-1200" > -->
              <ul class="booklist1" v-for="item in items">
                  <li class ="book-coverlist" @click="selectedBook(item)">
                    <div class="book-wrap">
                    <router-link to="/bookdetail" tag="a" >
                      <div class="img-box">
                          <!-- <img :src="item.book.cover_thumbnail" alt="" width="152px" height="190px" class="booklist-img"> -->
                          <img :src="item.book.cover_thumbnail" alt="" class="booklist-img">
                      </div>
                      </router-link>
                      <div class="book-info">
                          <h3 class="title">{{item.book.title}}</h3>
                          <p class="author">{{item.book.author}}</p>
                          <div class="line"></div>
                      </div>
                      <div class="ratingControl">
                          <input type="radio" name="rating" value="5">
                          <label class="ratingControl-stars ratingControl-stars--5" for="rating-5">5</label>
                          <input type="radio" name="rating" value="4.5">
                          <label class="ratingControl-stars ratingControl-stars--45 ratingControl-stars--half" for="rating-45">45</label>
                          <input type="radio" name="rating" value="4">
                          <label class="ratingControl-stars ratingControl-stars--4" for="rating-4">4</label>
                          <input type="radio" name="rating" value="3.5">
                          <label class="ratingControl-stars ratingControl-stars--35 ratingControl-stars--half" for="rating-35">35</label>
                          <input type="radio" name="rating" value="3">
                          <label class="ratingControl-stars ratingControl-stars--3" for="rating-3">3</label>
                          <input type="radio" name="rating" value="2.5">
                          <label class="ratingControl-stars ratingControl-stars--25 ratingControl-stars--half" for="rating-25">25</label>
                          <input type="radio" name="rating" value="2">
                          <label class="ratingControl-stars ratingControl-stars--2" for="rating-2">2</label>
                          <input type="radio" name="rating" value="1.5">
                          <label class="ratingControl-stars ratingControl-stars--15 ratingControl-stars--half" for="rating-15">15</label>
                          <input type="radio" name="rating" value="1">
                          <label class="ratingControl-stars ratingControl-stars--1" for="rating-1">1</label>
                          <input type="radio" name="rating" value="0.5">
                          <label class="ratingControl-stars ratingControl-stars--05 ratingControl-stars--half" for="rating-05">05</label>
                      </div>
                      <div class="delete-field">

                      </div>
                    </div>
                  </li>

              </ul>
          </div>

</template>
<script>
export default {
  name: "bookDetail",
  // vuex:{
  //   getters:{
  //     items: state
  //   }
  //
  // },
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
      comment:{
        content:" dkfdjkfdkj",
      },
      star:{
        content:" 5",
      },
      mark:{
        content:["안녕" ],
            },
    },
    {
      "book":{
      id: "x_5KAQAAIAAJ",
      title: "개",
      author:"김훈",
      cover_thumbnail: "http://books.google.com/books/content?id=x_5KAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
     comment:{
       content:" dkfdjkfdkj",
     },
     star:{
       content:" 5",
     },
     mark:{
       content:["안녕" ],
           },
   },
    {
      "book":{
      id: "x_5KAQAAIAAJ",
      title: "개",
      author:"김훈",
      cover_thumbnail: "http://books.google.com/books/content?id=x_5KAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
     comment:{
       content:" dkfdjkfdkj",
     },
     star:{
       content:" 5",
     },
     mark:{
       content:["안녕" ],
           }
   },
   {
     "book":{
     id: "x_5KAQAAIAAJ",
     title: "개",
     author:"김훈",
     cover_thumbnail: "http://books.google.com/books/content?id=x_5KAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
   },
    comment:{
      content:" dkfdjkfdkj",
    },
    star:{
      content:" 5",
    },
    mark:{
      content:["안녕" ],
          }
  },
          ],
  selected_book: {
      title: '',
      author: '',
      cover_thumbnail:'',
      mark:'',
      comment:'',
      newComment:'',

    },
    newMark: '',


  }
},
  methods:{
    selectedBook: function(book) {
      this.items.selected_book = book;
  // return this.showModal = true;

          },

}
}
</script>
<style>
.my-bookshelf {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;
}

.booklist1 {
  /*display: flex;
  flex-flow: column wrap;*/
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  margin: 50px 80px 50px 0;
  /*position: relative;*/
  width: 202px;
  height:345px;
  /*width: 22%;*/
}
.book-coverlist{
  margin:0;
  padding:0;
  width:100%;
}
/*.booklist1:last-child{
  margin-right: 0;
}
.booklist1:first-child{
  margin-left:20px;
}*/
.booklist1:hover {
  transform: translateY(-5px);
  transition: 0.5s ease-in;
}

.img-box {
  width:100%;
  padding:20px 20px 0;
  /*padding-top: 20px;*/
  display: flex;
  justify-content: center;
  background: #ececec
}
.booklist-img {
  align-items: center;
  /*width:152px;
  height:190px;*/
}

.book-info {
  margin: 0 25px;
  color: #131418;
}


.title {
  margin-top: 10px;
  height: 23px;
  display: block;
  font-size: 13px;
  text-align: center;
  padding-bottom: 2px;
}
.author {
  margin-bottom: 11px;
  font-size: 13px;
  text-align: center;
  color:#686a68;

}
.line {
  border-top: 1px solid #e2e2e2;
  margin-bottom: 10px;
}
.delete-field {
  height: 25px;
  background: #ececec;
}

/* -----   star rating   ----- */

.ratingControl {
  position: relative;
  width: 120px;
  height: 30px;
  user-select: none;
  margin: 0 auto;
  margin-top: 5px;
}
label {
  padding: 0;
}
.ratingControl input {
  visibility: hidden;
  width: 10px;
}

.ratingControl-stars {
  position: absolute;
  top: 0;
  width: 30px;
  height: 30px;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20width%3D%2215px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2015%2014%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3EEmpty%20Star%3C%2Ftitle%3E%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Order-Details---Order-final---Not-reviewed%22%20transform%3D%22translate%28-108.000000%2C%20-385.000000%29%22%20fill%3D%22%23D5D5D5%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate%28108.000000%2C%20316.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%280.000000%2C%2069.000000%29%22%20id%3D%22Star-7%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%227.5%2011.25%203.09161061%2013.5676275%203.93353806%208.65881373%200.367076128%205.18237254%205.2958053%204.46618627%207.5%200%209.7041947%204.46618627%2014.6329239%205.18237254%2011.0664619%208.65881373%2011.9083894%2013.5676275%20%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E");
  background-size: auto 20px;
  background-repeat: no-repeat;
  cursor: pointer;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}

.ratingControl-stars:hover,
.ratingControl-stars:hover ~ .ratingControl-stars,
input:checked ~ .ratingControl-stars {
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20width%3D%2215px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2015%2014%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3ESolid%20Star%3C%2Ftitle%3E%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Order-Details---Order-final---Not-reviewed%22%20transform%3D%22translate%28-108.000000%2C%20-385.000000%29%22%20fill%3D%22%23FEC844%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate%28108.000000%2C%20316.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%280.000000%2C%2069.000000%29%22%20id%3D%22Star-7%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%227.5%2011.25%203.09161061%2013.5676275%203.93353806%208.65881373%200.367076128%205.18237254%205.2958053%204.46618627%207.5%200%209.7041947%204.46618627%2014.6329239%205.18237254%2011.0664619%208.65881373%2011.9083894%2013.5676275%20%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E");
}

.ratingControl-stars:active,
.ratingControl-stars:active ~ .ratingControl-stars,
input:checked ~ .ratingControl-stars:active {
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20width%3D%2215px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2015%2014%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3ESolid%20Star%20%E2%80%93%20Light%3C%2Ftitle%3E%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Order-Details---Order-final---Not-reviewed%22%20transform%3D%22translate%28-108.000000%2C%20-385.000000%29%22%20fill%3D%22%23FFE39C%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate%28108.000000%2C%20316.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%280.000000%2C%2069.000000%29%22%20id%3D%22Star-7%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%227.5%2011.25%203.09161061%2013.5676275%203.93353806%208.65881373%200.367076128%205.18237254%205.2958053%204.46618627%207.5%200%209.7041947%204.46618627%2014.6329239%205.18237254%2011.0664619%208.65881373%2011.9083894%2013.5676275%20%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E");
}

.ratingControl-stars--05 {
  left: 0px;
}

.ratingControl-stars--1 {
  left: 0px;
}

.ratingControl-stars--15 {
  left: 25px;
}

.ratingControl-stars--2 {
  left: 25px;
}

.ratingControl-stars--25 {
  left: 50px;
}

.ratingControl-stars--3 {
  left: 50px;
}

.ratingControl-stars--35 {
  left: 75px;
}

.ratingControl-stars--4 {
  left: 75px;
}

.ratingControl-stars--45 {
  left: 100px;
}

.ratingControl-stars--5 {
  left: 100px;
}

.ratingControl-stars--half {
  width: 11px;
}


</style>
