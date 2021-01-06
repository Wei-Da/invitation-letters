module.exports = {
  // 配置sass（css编译工具）
  css: {
    loaderOptions: {
      sass: {
      //  @/ 表示 src/ 的别名, 如要有多个scss可以在 ; 后面在 @import "@/其他.scss";
      //  注：引入的文件要以.scss为后缀名，不能是sass！！！不然会报错！！！
       prependData: `@import "@/styles/variables.scss";`
      }
    }
  },
}