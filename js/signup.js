


//회원가입진행
//폼 입력값 찾기

//키보드 엔터로 회원가입 진행
// function keyboardAction(evt){
// evt = evt || window.event; // IE 6,7,8 고려 코드
// if(evt.keyCode == 13 || evt.keyCode ==3 ){
//   joinValidate();
//   }
// }
// document.onkeypress = keyboardAction;


// var joinBtn = document.querySelector('.modal button');
// joinBtn.onclick = joinValidate();

function joinValidate(){
  var joinForm = document.forms.join;
  var userName = document.getElementById('sbEmail').value;
  var nickName = document.getElementById('sbNickname').value;
  var passWord = document.getElementById('sbPassword').value;
  var passWord_re = document.getElementById('sbPassword_conf').value;
  // console.log(joinForm,userName,passWord,nickName,passWord_re);
  if (passWord != passWord_re) {
				alert("암호가 일치하지 않습니다");
				joinForm.passWord.select();
				// return;
			}

  return requestServer(userName,nickName,passWord);
}



//서버에 연결해서 정보 보냄

function requestServer(username,nickname,password){
  // console.log(username,nickname,password);
  //userInfo 객체 생성
  var userInfo = new Object();

  userInfo.username = username;
  userInfo.nickname = nickname;
  userInfo.password = password;

  console.log(userInfo);

  //서버요청
  var xhr = new XMLHttpRequest();
  // xhr.withCredentials = true;
	var url = "https://soobook.devlim.net/api/user/signup/";
	xhr.open("POST", url,true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			console.log(this.responseText);
		}

		// var json = JSON.parse(xhr.response);
    var json = window.JSON;

		if (xhr.status === 201) {
			// console.log(json.message + ", " + json.nickname)
			alert(userInfo.nickname + "님의 회원가입이 완료되었습니다!");

		} else if(json === null) {
			alert("회원가입에 실패했어요...다시 작성해주세요" );
      return;
		}
		// else {
		// 	alert("회원가입에 실패했어요..." + json.message);
		// }
	}

	var data = JSON.stringify(userInfo);
	xhr.send(data);
}

// function signup(username, password, nickname) {
//   $.ajax({
//     url: 'https://soobook.devlim.net/api/user/signup/',
//     type: 'POST',
//     dataType: 'json',
//     data: {
//       username: username,
//       password: password,
//       nickname: nickname,
//     }
//   })
//   .done(function(response) {
//     console.log(response);
//   })
//   .fail(function(response) {
//     console.log(response);
//   });
// }




function login(username, password) {
  $.ajax({
    url: 'https://soobook.devlim.net/api/user/login/',
    type: 'GET',
    dataType: 'json',
    data: {
      username: username,
      password: password,
    }
  })
  .done(function(response) {
    console.log(response);
    var tokenKey = response.key;
    setCookie('SoobookToken', tokenKey, 90);
    // return tokenKey;
  })
  .fail(function(response) {
    console.log(response);
  });

}

function logout() {
  var token = 'Token ' + getCookie('SoobookToken');
  $.ajax({
    url: 'https://soobook.devlim.net/api/user/logout/',
    type: 'POST',
    headers: {
      Authorization: token,
    }
  })
  .done(function(response) {
    console.log(response);
  })
  .fail(function(response) {
    console.log(response);
  });
}

function setCookie(name, value, expireDays) {
  var exdate=new Date();
  exdate.setDate(exdate.getDate() + expireDays);
  var c_value=escape(value) + ((expireDays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie=name + "=" + c_value;
}

function getCookie(c_name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) {
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");

	  if (x==c_name) {
			return unescape(y);
		}
	}
}
