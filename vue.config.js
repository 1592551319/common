module.exports = {
  css: {
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true,
      },
    },
  },
  pages: {
    mobile: {
      entry: "src/test/test.main.js",
      // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
      template: "public/mobile.html",
      // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
      filename: "mobile.html",
    },
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
};
