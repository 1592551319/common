const path = require('path')
const { getLess } = require('@zougt/some-loader-utils')
const ThemeCssExtractWebpackPlugin = require('@zougt/theme-css-extract-webpack-plugin')
const multipleScopeVars = [
  {
    // 必需,任意名称
    scopeName: 'theme-vars',
    path: path.resolve('src/assets/styles/theme.less')
  }
]

module.exports = {
  css: {
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true,
        implementation: getLess({
          getMultipleScopeVars: () => multipleScopeVars
        })
      }
    }
  },
  // pages: {
  //   mobile: {
  //     entry: "src/test/test.main.js",
  //     // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
  //     template: "public/mobile.html",
  //     // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
  //     filename: "mobile.html",
  //   },
  //   index: {
  //     entry: "src/main.js",
  //     template: "public/index.html",
  //     filename: "index.html",
  //   },
  // },
  transpileDependencies: ['color'],
  configureWebpack: {
    plugins: [
    ]
  },

  chainWebpack: (config) => {
    // 添加别名，也可以直接 import setCustomTheme from "@zougt/theme-css-extract-webpack-plugin/dist/setCustomTheme.js";
    config.resolve.alias.set(
      '@setCustomTheme',
      '@zougt/theme-css-extract-webpack-plugin/dist/setCustomTheme.js'
    )
    if (process.env.NODE_ENV === 'development') {
      // 添加setCustomTheme的热更新loader（仅开发模式需要）
      config.module
        .rule('setCustomTheme-hot-loader')
        .test(/setCustomTheme.js$/)
        .enforce('pre')
        .use('setCustomTheme-hot-loader')
        .loader(
          '@zougt/theme-css-extract-webpack-plugin/dist/hot-loader/index.js'
        )
    }
    //  添加主题插件
    config
      .plugin('ThemeCssExtractWebpackPlugin')
      .use(ThemeCssExtractWebpackPlugin, [
        {
          // 以下是任意主题模式的参数 arbitraryMode:true 有效
          arbitraryMode: true,
          // 默认主题色，与"src/theme/mauve-vars.scss"的@--color-primary主题色相同
          defaultPrimaryColor: '#512da7',
          hueDiffControls: {
            low: 0,
            high: 0
          },
          multipleScopeVars,
          // 【注意】includeStyleWithColors作用： css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重
          includeStyleWithColors: [
            {
              color: '#ffffff',
              // 排除掉样式属性，这里将非背景的白色提升权重
              excludeCssProps: ['background', 'background-color']
              // 此类颜色的是否跟随主题色梯度变化，默认false
              // inGradient: true,
            },
            {
              // element-ui 的非primary颜色，受到了primary的权重问题，这里可以让他们提升权重
              color: [
                // success background-color
                '#67C23A',
                // info background-color
                '#909399',
                // warning background-color
                '#E6A23C',
                // danger background-color
                '#F56C6C',
                // success hover  background-color
                '#85ce61',
                // info hover  background-color
                '#a6a9ad',
                // warning hover  background-color
                '#ebb563',
                // danger hover  background-color
                '#f78989'
              ]
            }
          ]
        }
      ])
  }
}
