const HtmlWebpackPlugin=require("html-webpack-plugin");
const CleanWebpackPlugin=require("clean-webpack-plugin");

module.exports={
    entry:"./src/index.ts",
    output:{
      filename:"main.js"
    },
    resolve:{
       extensions:['.js','.ts','.tsx']
    },
    module:{
      rules:[{
          test:/\.tsx?$/,
          use:'ts-loader',
          exclude:/node_modules/
      }]
    },
    devtool:'inline-source-map',
    devServer:{
      contentBase:'./dist',
      stats:'errors-only',
      compress:false,
      host:'localhost',
      port:8089
    },
    plugins:[
     new  HtmlWebpackPlugin({
       template:'./src/template/index.html'
      }),
     new  CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:['./dist']
      })
    ]
}