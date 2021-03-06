// Globally Load SASS into your Vue.js Applications
// the "@" in vue - cli is an alias that points to / src

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_color.scss";
          @import "@/scss/_reset.scss";
          @import "@/scss/_extend.scss";
          @import "@/scss/_mixin.scss";
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/alpha-shop-vue/'
    : '/'
};

/* No need to import, it just works \o/ */