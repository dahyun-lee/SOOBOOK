<template>
  <div class="bg-wrap">
    <div class="wrap-1200">
  <div class="signup-box">
    <form id="join" method="post">

       <h2 class="signup-header">회원가입</h2>
     <label for="sb-email">이메일</label></th>
      <input type="email" id="sbEmail" placeholder="이메일 아이디" required>
     <label for="sb-nickname">닉네임</label></th>
      <input type="text" id="sbNickname" placeholder="닉네임" required>
      <label for="sbPassword">비밀번호</label></th>
        <input type="password" id="sbPassword" placeholder="비밀번호" required>
         <label for="sbPassword_conf">비밀번호 확인</label></th>
           <input type="password" id="sbPassword_conf" placeholder="비밀번호확인" required>
      <button type="submit" class="signup_submit_btn" onclick="joinValidate()">완료</button>
      </form>
  </div>
    </div>
      </div>




  <!-- <div class="modal is-active">
  <router-link to="/"><div class="modal-background"></div></router-link>
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
  <router-link to="/"><button class="modal-close"></button></router-link>
</div> -->
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {
        showModal: false
    }
  }
}
</script>
<style>
</style>
