<template>
  <!-- nav -->
  <nav>
    <div class="container">
      <div class="navbar">
        <ul class="nav__links">
          <li class="nav__link link__men">男款</li>
          <li class="nav__link link__women">女款</li>
          <li class="nav__link link__news">最新消息</li>
          <li class="nav__link link__customized">客製商品</li>
          <li class="nav__link link__contact">聯絡我們</li>
        </ul>
        <!-- nav__logo for Web display -->
        <a href="#" class="nav__logo d-none"></a>

        <div class="nav__icons">
          <input type="text" name="" id="" class="d-none" />
          <div class="nav__icon icon__search"></div>
          <div class="nav__icon icon__cart"></div>
          <div class="nav__icon icon__darkMode--toggle"></div>
        </div>
      </div>
      <a href="#" class="nav__logo"></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

