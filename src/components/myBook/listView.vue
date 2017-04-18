<template>
  <!-- <div class="bg-wrap"> -->
    <!-- <div class="wrap-1200"> -->
      <ul class="book-list">
            <li
            @click="selectedBook(item)"
            class="bookList"
            v-for="item in items">

            <i class="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
            <router-link to="/bookdetail" tag="a" >
              <div class="bookListL">
                <img :src="item.cover_thumbnail" class="bookCover">
              </div>
            </router-link>
              <div class="bookListR">
                  <h5 class="bookTitle">{{item.title}}</h5>
                  <p class="bookAuthors">{{ item.author }}</p>
                  <!-- <p>{{ item.starRating }}</p> -->
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                <p class="bookReview">{{ item.review }}</p>
                <p class="bookSaveDate">{{ item.saveDate }}</p>
              </div>

            </li>
          </ul>
    <!-- </div> -->
  <!-- </div> -->
</template>
<script>
export default {
  name: "listView",
  data: function() {
    return {
      items: [
       {
         id: "x_5KAQAAIAAJ",
         cover_thumbnail: "http://books.google.com/books/content?id=x_5KAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
         title: "개",
         author:"김훈",
         starRating: 5,
         review:"우리 민족이 일본 제국주의에서 해방된 이후 한반도에 몰아친 비바람들, 한국전쟁, 4·19, 5·16, 5·18, 6·10을 보고 겪은 작가 김훈. 김훈의 아홉 번째 장편소설『공터에서』는 이승만, 박정희 등을 거쳐 국가권력이 옮겨가는 것을 목격하며, 그에 따라 영광은 작고 치욕과 모멸은 많은 우리 삶의 꼴이 달라지고 있는 것을 자전적 경험을 실마리로 집필한 작품이다.",
         saveDate:"2017-03-01"
       },
       {
         id: "ZPfEOwAACAAJ",
         cover_thumbnail: "http://books.google.com/books/content?id=ZPfEOwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
         title: "남한산성",
         author: "김훈",
          starRating: 4,
          review:"우리 민족이 일본 제국주의에서 해방된 이후 한반도에 몰아친 비바람들, 한국전쟁, 4·19, 5·16, 5·18, 6·10을 보고 겪은 작가 김훈. 김훈의 아홉 번째 장편소설『공터에서』는 이승만, 박정희 등을 거쳐 국가권력이 옮겨가는 것을 목격하며, 그에 따라 영광은 작고 치욕과 모멸은 많은 우리 삶의 꼴이 달라지고 있는 것을 자전적 경험을 실마리로 집필한 작품이다.",
          saveDate:"2017-03-02"
       },
       {
         id: "pL8pMwAACAAJ",
         cover_thumbnail: "http://books.google.com/books/content?id=pL8pMwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
         title: "해리포터와 불의잔(양장본 HardCover)",
         author: "조앤 K. 롤링",
         starRating: 4,
         review:"J.K. 롤링과 잭 손, 존 티퍼니가 쓴 원작을 토대로 잭 손이 각색하여 탄생시킨 희곡 『해리포터와 저주받은 아이』 제2부. 79개 국어로 번역돼 4억 5,000만 부가 팔리며 유례를 찾기 힘들 만큼 폭발적인 반응을 일으킨 「해리 포터」 시리즈가 무려 9년 만에 돌아왔다. 「해리 포터」 시리즈의 여덟 번째 이야기이자 처음으로 무대에서 정식 상연된 연극으로, 2016년 7월 30일 런던 웨스트엔드에서 초연되어 변치 않은 해리 포터 신드롬을 증명했다. ",
         saveDate:"2017-04-02"
       },
       {
         id: "KLl5DQAAQBAJ",
         cover_thumbnail: "http://books.google.com/books/content?id=KLl5DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
         title: "해리 포터 컴플리트 컬렉션",
         author: "조앤 K. 롤링",
         starRating: 2,
         review:"J.K. 롤링과 잭 손, 존 티퍼니가 쓴 원작을 토대로 잭 손이 각색하여 탄생시킨 희곡 『해리포터와 저주받은 아이』 제2부. 79개 국어로 번역돼 4억 5,000만 부가 팔리며 유례를 찾기 힘들 만큼 폭발적인 반응을 일으킨 「해리 포터」 시리즈가 무려 9년 만에 돌아왔다. 「해리 포터」 시리즈의 여덟 번째 이야기이자 처음으로 무대에서 정식 상연된 연극으로, 2016년 7월 30일 런던 웨스트엔드에서 초연되어 변치 않은 해리 포터 신드롬을 증명했다. ",
         saveDate:"2017-04-03"
       },
       {
         id: "db-FAAADQBAJ",
         cover_thumbnail: "http://books.google.com/books/content?id=db-FAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
         title: "호출",
         author: "김영하",
         starRating: 5,
         review:"1995년 계간지 '리뷰'에 단편소설 을 발표하면서 문단에 등단한 이후, 지금 세대를 대표해온 소설가 김영하의 『호출』. 리얼리즘과 판타지를 자유롭게 넘나드는 스펙터클한 상상력을 지닌 비범하고 충격적 소설가의 탄생을 알린 첫 소설집이다. 활달하고 대담한 상상력을 유감없이 발휘하면서 참신하고 경이로운 작품 세계를 만들어온 저자의 소설가로서의 첫걸음을 확인하게 된다. 세계에 대한 쓰디쓴 인식은 물론, 거짓과 죽음에 대한 고통스러운 싸움이 끓는 11편의 소설을 수록했다. 시대로부터 배신당한 인물들을 만나게 해준다. ☞ 북소믈리에 한마디! 초판이 출간된 지 13년만에 새로운 컬렉션으로 세상에 나왔다.",
         saveDate:"2017-01-08"
       },
       {
         id: "x_5KAQATIAAJ",
         cover_thumbnail: "http://books.google.com/books/content?id=x_5KAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
         title: "개",
         author: "김훈",
         starRating: 3,
         review:"우리 민족이 일본 제국주의에서 해방된 이후 한반도에 몰아친 비바람들, 한국전쟁, 4·19, 5·16, 5·18, 6·10을 보고 겪은 작가 김훈. 김훈의 아홉 번째 장편소설『공터에서』는 이승만, 박정희 등을 거쳐 국가권력이 옮겨가는 것을 목격하며, 그에 따라 영광은 작고 치욕과 모멸은 많은 우리 삶의 꼴이 달라지고 있는 것을 자전적 경험을 실마리로 집필한 작품이다.",
         saveDate:"2017-02-01"
       },
       {
         id: "ZPfEOwAACANJ",
         cover_thumbnail: "http://books.google.com/books/content?id=ZPfEOwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
         title: "남한산성",
         author: "김훈",
          starRating: 2,
          review:"우리 민족이 일본 제국주의에서 해방된 이후 한반도에 몰아친 비바람들, 한국전쟁, 4·19, 5·16, 5·18, 6·10을 보고 겪은 작가 김훈. 김훈의 아홉 번째 장편소설『공터에서』는 이승만, 박정희 등을 거쳐 국가권력이 옮겨가는 것을 목격하며, 그에 따라 영광은 작고 치욕과 모멸은 많은 우리 삶의 꼴이 달라지고 있는 것을 자전적 경험을 실마리로 집필한 작품이다.",
          saveDate:"2017-01-02"
       },
       {
         id: "db-FAAAACBAJ",
         cover_thumbnail: "http://books.google.com/books/content?id=db-FAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
         title: "호출",
         author: "김영하",
         starRating: 5,
         review:"1995년 계간지 '리뷰'에 단편소설 을 발표하면서 문단에 등단한 이후, 지금 세대를 대표해온 소설가 김영하의 『호출』. 리얼리즘과 판타지를 자유롭게 넘나드는 스펙터클한 상상력을 지닌 비범하고 충격적 소설가의 탄생을 알린 첫 소설집이다. 활달하고 대담한 상상력을 유감없이 발휘하면서 참신하고 경이로운 작품 세계를 만들어온 저자의 소설가로서의 첫걸음을 확인하게 된다. 세계에 대한 쓰디쓴 인식은 물론, 거짓과 죽음에 대한 고통스러운 싸움이 끓는 11편의 소설을 수록했다. 시대로부터 배신당한 인물들을 만나게 해준다. ☞ 북소믈리에 한마디! 초판이 출간된 지 13년만에 새로운 컬렉션으로 세상에 나왔다.",
         saveDate:"2017-02-18"
       },
       {
         id: "KLl5DEAAQBAJ",
         cover_thumbnail: "http://books.google.com/books/content?id=KLl5DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
         title: "해리 포터 컴플리트 컬렉션",
         author: "조앤 K. 롤링",
         starRating: 2,
         review:"J.K. 롤링과 잭 손, 존 티퍼니가 쓴 원작을 토대로 잭 손이 각색하여 탄생시킨 희곡 『해리포터와 저주받은 아이』 제2부. 79개 국어로 번역돼 4억 5,000만 부가 팔리며 유례를 찾기 힘들 만큼 폭발적인 반응을 일으킨 「해리 포터」 시리즈가 무려 9년 만에 돌아왔다. 「해리 포터」 시리즈의 여덟 번째 이야기이자 처음으로 무대에서 정식 상연된 연극으로, 2016년 7월 30일 런던 웨스트엔드에서 초연되어 변치 않은 해리 포터 신드롬을 증명했다. ",
         saveDate:"2017-01-13"
       },
       {
         id: "pL8pMwACCAAJ",
         cover_thumbnail: "http://books.google.com/books/content?id=pL8pMwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
         title: "해리포터와 불의잔(양장본 HardCover)",
         author: "조앤 K. 롤링",
         starRating: 1,
         review:"J.K. 롤링과 잭 손, 존 티퍼니가 쓴 원작을 토대로 잭 손이 각색하여 탄생시킨 희곡 『해리포터와 저주받은 아이』 제2부. 79개 국어로 번역돼 4억 5,000만 부가 팔리며 유례를 찾기 힘들 만큼 폭발적인 반응을 일으킨 「해리 포터」 시리즈가 무려 9년 만에 돌아왔다. 「해리 포터」 시리즈의 여덟 번째 이야기이자 처음으로 무대에서 정식 상연된 연극으로, 2016년 7월 30일 런던 웨스트엔드에서 초연되어 변치 않은 해리 포터 신드롬을 증명했다. ",
         saveDate:"2017-01-12"
       },
       {
         id: "x_5KAQAAIABJ",
         cover_thumbnail: "http://books.google.com/books/content?id=x_5KAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
         title: "개",
         author: "김훈",
         starRating: 2,
         review:"우리 민족이 일본 제국주의에서 해방된 이후 한반도에 몰아친 비바람들, 한국전쟁, 4·19, 5·16, 5·18, 6·10을 보고 겪은 작가 김훈. 김훈의 아홉 번째 장편소설『공터에서』는 이승만, 박정희 등을 거쳐 국가권력이 옮겨가는 것을 목격하며, 그에 따라 영광은 작고 치욕과 모멸은 많은 우리 삶의 꼴이 달라지고 있는 것을 자전적 경험을 실마리로 집필한 작품이다.",
         saveDate:"2017-01-01"
       },
       {
         id: "db-FAAAAQBAO",
         cover_thumbnail: "http://books.google.com/books/content?id=db-FAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
         title: "호출",
         author: "김영하",
         starRating: 3,
         review:"1995년 계간지 '리뷰'에 단편소설 을 발표하면서 문단에 등단한 이후, 지금 세대를 대표해온 소설가 김영하의 『호출』. 리얼리즘과 판타지를 자유롭게 넘나드는 스펙터클한 상상력을 지닌 비범하고 충격적 소설가의 탄생을 알린 첫 소설집이다. 활달하고 대담한 상상력을 유감없이 발휘하면서 참신하고 경이로운 작품 세계를 만들어온 저자의 소설가로서의 첫걸음을 확인하게 된다. 세계에 대한 쓰디쓴 인식은 물론, 거짓과 죽음에 대한 고통스러운 싸움이 끓는 11편의 소설을 수록했다. 시대로부터 배신당한 인물들을 만나게 해준다. ☞ 북소믈리에 한마디! 초판이 출간된 지 13년만에 새로운 컬렉션으로 세상에 나왔다.",
         saveDate:"2017-01-28"
       },
       {
         id: "ZPfEOwAACAAK",
         cover_thumbnail: "http://books.google.com/books/content?id=ZPfEOwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
         title: "남한산성",
         author: "김훈",
          starRating: 4,
          review:"우리 민족이 일본 제국주의에서 해방된 이후 한반도에 몰아친 비바람들, 한국전쟁, 4·19, 5·16, 5·18, 6·10을 보고 겪은 작가 김훈. 김훈의 아홉 번째 장편소설『공터에서』는 이승만, 박정희 등을 거쳐 국가권력이 옮겨가는 것을 목격하며, 그에 따라 영광은 작고 치욕과 모멸은 많은 우리 삶의 꼴이 달라지고 있는 것을 자전적 경험을 실마리로 집필한 작품이다.",
          saveDate:"2017-02-12"
       }
     ]
    }
  },
  methods: {
    textCut(txt ,len) {
      if (len == "" || len == null) {
             len = 15;
         }
        if (txt.length > len) {
            txt = txt.substr(0, len) + '...';
        }
        return txt;
      }
  },
   mounted() {
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
