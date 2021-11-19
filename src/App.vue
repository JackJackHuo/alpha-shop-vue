<template>
  <div id="AlphaShop">
    <body>
      <!-- nav-toggle -->
      <!-- 為了要隱藏main將hambergur移至跟main同一層 -->
      <input
        type="checkbox"
        name="nav__toggle"
        id="nav__toggle"
        class="nav__toggle"
      />
      <label for="nav__toggle" class="nav__toggle__label"
        ><span class="hamburger"></span
      ></label>
      <!-- navbar -->
      <Navbar />
      <!-- main -->
      <router-view />
      <!-- footer -->
      <Footer />
    </body>
  </div>
</template>


<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./scss/style";
</style>