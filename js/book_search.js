

//구글 API 활용한 책검색 구현
  function bookSearch(){
    var search = document.querySelector('.search-input').value;
    var results= document.querySelector('.results');
    document.querySelector('.results').innerHTML = "";
    console.log('search');
    //버튼 이벤트
    var btn = document.querySelector('.search-btn');
    btn.addEventListener('click',bookSearch,false);

    //ajax통해 구글 book open api 불러옴
    $.ajax({
      url:"https://www.googleapis.com/books/v1/volumes?q=" + search,
      dataType: "json",
      success: function(data){
        for(var i=0; i< data.items.length; i++){
          // results.innerHTML += "<h2>" + data.items[i].volumeInfo.title +"</h2>"
          results.innerHTML += "<img src=" + data.items[i].volumeInfo.imageLinks.thumbnail +
          " id= "+ data.items[i].id + " title=" + data.items[i].volumeInfo.title +" class=\"save-book\" draggable=\"true\" ondragstart=\"drag(this, event)\">"
        }
      },
      type: 'GET'
    });
    }

    //로컬 스토리지 - 모르겠다;;
    // var storage = window.localStorage;
    // var JSON = window.JSON;
    //
    // var book_data = [
    //   {
    //     "cover" : "커버파일입니다.",
    //     "music" : "음악파일입니다."
    //   },
    //   {
    //     "cover1" : "커버1파일입니다.",
    //     "music1" : "음악1파일입니다."
    //   },
    // ];
    //
    // if(!storage.getItem('book_list')){
    //   storage.setItem('book_list',JSON.stringify(data));
    // }
    // console.log('after:', storage.getItem('book_list'));



//키보드 액션 - 엔터키 지원
function keyboardAction(evt){
evt = evt || window.event; // IE 6,7,8 고려 코드
if(evt.keyCode == 13 || evt.keyCode ==3 ){
  bookSearch();}
}
document.onkeypress = keyboardAction;


//드래그앤 드롭

function drag(target, book) {		//드래그 시작시 호출 할 함수
book.dataTransfer.setData('Text', target.id);
}

function drop(target, book) {		//드롭시 호출 할 함수
var id = book.dataTransfer.getData('Text');
var books = target.appendChild(document.getElementById(id));
// book.preventDefault();
console.log('이동된 책 아이디:',id);
selected_booklist.push({"id":id,"cover":book});
}

var selected_booklist=[];
