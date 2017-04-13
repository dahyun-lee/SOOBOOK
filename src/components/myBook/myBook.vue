<template>
  <div class="bg-wrap">
    <div class="booksearch-box">

      <div class="booksearch-inner">
        <p class="booksearch-title">책장에 등록하고 싶은 책을 검색해보세요</p>
        <router-link to="/booksearch" tag="button" type="button" class="search-btn">검색</button></router-link>
        </div>

    </div>
    <div class="utility">
    <div class="utility-inner">
      <p class="total-msg">Total 등록 책 : <span>103권</span></p>

        <div>
          <router-link to="/mybook"><button type="button" class="view-btn"><i class="fa fa-th fa-2x" aria-hidden="true" ></i></button></router-link>
          <router-link to="/mybook/listview"><button type="button" class="view-btn"><i class="fa fa-th-list fa-2x" aria-hidden="true"></i></button></router-link>
        </div>
        <div class="listbook-search">
         <label><input type="text" placeholder="책장 내 검색"><button type="button"><i class="fa fa-search" aria-hidden="true"></i></button></label>
       </div>
    </div>


    </div>
    <div class="wrap-1200">


      <transition name = "slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="pagination">
   <span v-for="n in 10">{{ n }}<router-link to="/mybook?page=3" tag="a"></router-link></span>
   </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "myBook",
  data: function data() {
    return {

    }
  },
  mounted () {
    var util = jQuery('.utility');
    var utilOffsetTop = Math.ceil(util.offset().top);
    jQuery(window).scroll(function() {
      var position = jQuery(this).scrollTop();
      var hasFixed = util.hasClass('fixed');
      if(position >= utilOffsetTop && !hasFixed) {
        util.addClass('fixed');
      }
      if (position < utilOffsetTop && hasFixed) {
        util.removeClass('fixed');
      }
    });
  }
}
</script>
<style>

.pagination{
  font-size: 1.3rem;
  text-align: center;
  padding: 0 0 40px 0;
}
.pagination span{
  margin: 5px;
}
.pagination a{
  color:#464345;
}
.pagination span:hover{
  color:#64b9c8;
  cursor: pointer;
}


@keyframes slide-in{
  from{
    transform: translateY(500px);
  }

  to{
    transform: translateY(-21px);
    opacity: 1;
  }
}
.slide-enter-active{
  animation: slide-in 0.4s
}

.slide-leave{
  opacity: 1
}

.slide-leave-active{
    animation: slide-out 0.4s
}
</style>
