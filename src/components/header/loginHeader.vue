<template>
  <div class="login-headerwrap">
  <header>
<h1 class="logo">
  <router-link to="/" exact>
  <img
  src="../../assets/logo2.png" alt="soobook logo">
  </router-link>
</h1>
<div class="log-in">
<h2 class="hidden">로그인</h2>

<ul >
<li class="nickname">  소복소복 님</li>
<li>
  <router-link to="/"><a href>로그아웃</a></router-link>
</li>
<!-- <li>
  <router-link to="/mybook"><a href>마이 북리스트</a></router-link>
</li> -->
</ul>
</div>
</header>
</div>
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
