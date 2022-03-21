module.exports = {
  css: {
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true,
      },
    },
  },
  // module: {
    // rules: [
    //   {
    //     test: /\.vue$/,
    //     use: [
    //       {
    //         loader: 'vue-loader',
    //         options: {

    //         }
    //       },
    //       {
    //         loader: 'iview-loader',
    //         options: {
    //           prefix: false
    //         }
    //       }
    //     ]
    //   }
    // ]
  // }
};
