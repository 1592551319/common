<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['themeColor', 'defaultThemeColor', 'themeMode'])
  },
  mounted() {
    if (this.themeColor) {
      this.SET_THEME_COLOR(this.themeColor)
    } else {
      this.SET_THEME_COLOR(this.defaultThemeColor)
    }
    // this.SET_THEME_MODE(this.themeMode);
  },
  methods: {
    ...mapMutations(['SET_THEME_COLOR', 'SET_THEME_MODE'])
  }
}
</script>

<style lang="less">
html {
	--primary-color: red;
}

* {
	margin: 0;
	padding: 0;
}
html,
body {
	height: 100%;
	width: 100%;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100%;
	width: 100%;
}
// html[theme="dark"] {
//   filter: invert(1) hue-rotate(180deg);
// }
</style>
