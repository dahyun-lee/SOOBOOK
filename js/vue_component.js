
// 회원가입 모달 창

Vue.component('app-modal',{
  template:`
  <div class="modal is-active">
  <div class="modal-background" @click="$emit('close')"></div>
  <div class="modal-content">
    <div class="signup-box">
      <form id="join" method="post">
       <table>
         <tr><th scope="colgroup" colspan="2"><h2 class="signup-header">회원가입</h2></th></tr>
       <tr><th><label for="sb-email">이메일</label></th>
         <td><input type="email" id="sbEmail" placeholder="이메일 아이디" required></td></tr>
       <tr><th><label for="sb-nickname">닉네임</label></th>
         <td><input type="text" id="sbNickname" placeholder="닉네임" required></td></tr>
        <tr><th><label for="sbPassword">비밀번호</label></th>
           <td><input type="password" id="sbPassword" placeholder="비밀번호" required></td></tr>
           <tr><th><label for="sbPassword_conf">비밀번호 확인</label></th>
              <td><input type="password" id="sbPassword_conf" placeholder="비밀번호확인" required></td></tr>
        <tr><td scope="colgroup" colspan="2"><button type="submit" class="signup_submit_btn" onclick="joinValidate()">완료</button></td></tr>
        </table>
        </form>
    </div>
  </div>
  <button class="modal-close" @click="$emit('close')"></button>
</div>
  `,

});
 var vm = new Vue({
   el: '#app',
   data:{
     showModal: false
   }
 });
