<template>
  <div class="setting-button">
    <Button type="primary" @click="handleVisible">
      <Icon type="ios-construct" />
    </Button>
    <Drawer v-model="visible" title="系统设置" :closable="true" width="400">
      <Form>
        <FormItem label="深色模式：">
          <i-switch
            v-model="themeModeComputed"
            true-value="dark"
            false-value="light"
            @on-change="handleChangeThemeMode"
          />
        </FormItem>
        <FormItem label="主题颜色：">
          <ColorPicker
            v-model="themeColorComputed"
            style="width: 250px"
            @on-change="handleChangeThemeColor"
          />
        </FormItem>
      </Form>
    </Drawer>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'SettingDrawer',
  components: {},
  data() {
    return {
      visible: false,
      color: '#ed4014'
    }
  },
  computed: {
    ...mapGetters(['themeMode', 'themeColor']),
    themeColorComputed: {
      get() {
        return this.themeColor
      },
      set(v) {
        return v
      }
    },
    themeModeComputed: {
      get() {
        return this.themeMode
      },
      set(v) {
        return v
      }
    }
  },
  mounted() {
    // this.initTheme();
  },
  methods: {
    ...mapMutations(['SET_THEME_MODE', 'SET_THEME_COLOR']),
    handleVisible() {
      this.visible = true
    },
    handleChangeThemeMode(v) {
      this.SET_THEME_MODE(v)
    },
    handleChangeThemeColor(v) {
      this.SET_THEME_COLOR(v)
    },
    initTheme() {
      const cssBlock = document.styleSheets
      const styleData = [...cssBlock].reverse().find(({ cssRules }) => {
        return [...cssRules].find((rule) => {
          return ['.voucher_head'].includes(rule.selectorText)
        })
      })
      return styleData.ownerNode.innerText
    },
    handleSetColor(oldval, newval) {
      const orignalCluster = this.getThemeCluster(oldval.replace('#', ''))
      const newThemeCluster = this.getThemeCluster(newval.replace('#', ''))
      const styles = [].slice.call(document.querySelectorAll('style')).filter((style) => {
        const text = style.innerText
        return new RegExp(oldval, 'i').test(text)
      })
      styles.map((style) => {
        const { innerText } = style
        if (typeof innerText !== 'string') return
        style.innerText = this.updateStyle(innerText, orignalCluster, newThemeCluster)
      })
    },
    updateStyle(stylecon, oldCulster, newCluster) {
      let newStyleCon = stylecon
      oldCulster.forEach((color, index) => {
        let regexp = ''
        if (color.split(',').length > 1) {
          const rgbArr = color.split(',')
          regexp = new RegExp(
            '\\s*' +
							rgbArr[0] +
							'\\s*,\\s*' +
							rgbArr[1] +
							'\\s*,\\s*' +
							rgbArr[2] +
							'\\s*',
            'ig'
          )
        } else {
          regexp = new RegExp(color, 'ig')
        }
        newStyleCon = newStyleCon.replace(regexp, newCluster[index])
      })
      return newStyleCon
    },
    // 得到需要修改的一系类颜色值
    getThemeCluster(theme) {
      const clusters = [theme]
      for (let i = 0; i <= 9; i++) {
        clusters.push(this.getTintColor(theme, Number(i / 10).toFixed(2)))
      }
      clusters.push(this.getShadeColor(theme, 0.1))
      return clusters
    },
    // 得到色调颜色
    getTintColor(color, tint) {
      let red = parseInt(color.slice(0, 2), 16)
      let green = parseInt(color.slice(2, 4), 16)
      let blue = parseInt(color.slice(4, 6), 16)
      if (tint === 0) {
        return [red, green, blue].join(',')
      } else {
        red += Math.round((255 - red) * tint)
        green += Math.round((255 - green) * tint)
        blue += Math.round((255 - blue) * tint)
        red = red.toString(16)
        green = green.toString(16)
        blue = blue.toString(16)
        return `#${red}${green}${blue}`
      }
    },
    // 获取阴影色调颜色
    getShadeColor(color, shade) {
      let red = parseInt(color.slice(0, 2), 16)
      let green = parseInt(color.slice(2, 4), 16)
      let blue = parseInt(color.slice(4, 6), 16)
      red = Math.round((1 - shade) * red)
      green = Math.round((1 - shade) * green)
      blue = Math.round((1 - shade) * blue)
      red = red.toString(16)
      green = green.toString(16)
      blue = blue.toString(16)
      return `#${red}${green}${blue}`
    }
  }
}
</script>
<style lang="less" scoped>
.setting-button {
	position: fixed;
	right: 10px;
	bottom: 50%;
	height: 40px;
	button {
		height: 100%;
	}
}
// .ivu-btn-primary {
//   background-color: var(--primary-color);
// }
</style>
