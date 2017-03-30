


//회원가입진행
//폼 입력값 찾기

function joinValidate(){
  var joinForm = document.forms.join;
  var userName = document.getElementById('sbEmail').value;
  var nickName = document.getElementById('sbNickname').value;
  var passWord = document.getElementById('sbPassword').value;
  var passWord_re = document.getElementById('sbPassword_conf').value;
  console.log(joinForm,userName,passWord,nickName,passWord_re);
  if (passWord != passWord_re) {
				alert("암호가 일치하지 않습니다");
				joinForm.passWord.select();
				return;
			}

  return requestServer(userName,nickName,passWord);
}



//서버에 연결해서 정보 보냄

function requestServer(username,nickname,password){
  console.log(username,nickname,password);
  //userInfo 객체 생성
  var userInfo = new Object();

  userInfo.username = username;
  userInfo.nickname = nickname;
  userInfo.password = password;

  console.log(userInfo);

  //서버요청
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
	var url = "https://soobook.devlim.net/api/user/signup/";
	xhr.open("POST", url,true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			console.log(this.responseText);
		}

		var json = JSON.parse(xhr.response);

		if (xhr.status == 200) {
			console.log(json.message + ", " + json.nickname)
			alert(json.nickname + "님의 회원가입이 완료되었습니다!");

		} else if (json == null) {
			alert("회원가입에 실패했어요..." + xhr.statusText);
		}
		else {
			alert("회원가입에 실패했어요..." + json.message);
		}
	}

	var data = JSON.stringify(userInfo);
	xhr.send(data);
}
