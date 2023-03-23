// import { getThemeCluster, updateStyle } from "@/plugins/theme";
import Color from 'color'
import setCustomTheme from '@zougt/theme-css-extract-webpack-plugin/dist/setCustomTheme'
export default {
  state: {
    themeColor: '',
    themeMode: 'light',
    defaultThemeColor: '#512da7',
    themeModeColor: '#000'
  },
  getters: {
    defaultThemeColor(state) {
      return state.defaultThemeColor
    },
    themeColor(state) {
      return state.themeColor
    },
    themeMode(state) {
      return state.themeMode
    },
    themeModeColor(state) {
      return state.themeModeColor
    }
  },
  mutations: {
    SET_THEME_COLOR(state, data) {
      state.themeColor = data
      document.documentElement.style.setProperty('--primary-color', data)
      setCustomTheme({
        Color,
        primaryColor: data
        // gradientReplacer:{},
        // targetValueReplacer:{}
      })
    },
    SET_THEME_MODE(state, data) {
      // document.documentElement.setAttribute("theme", data);
      state.themeMode = data
    }
  },
  actions: {}
}
