/*  第一步安装koa  */
const Koa = require("koa");
/*安装koa router 并引入 */
const Router = require("koa-router");
/* 安装koa 静态资源处理 */
const koaStaticCache = require("koa-static-cache");
/* 引入mysql2  */
const mysql = require("mysql2");


const app = new Koa();
//创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodedemo'
})
let result1 = [];
var getInformationFromDB = function (callback) {

     connection.query("SELECT * FROM `todos`", function (err, res, fields) {
      if (err) return callback(err);
      if (res.length) {
        for (var i = 0; i < res.length; i++) {
          result1.push(res[i]);
        }
      }
      callback(null, result1);
      result1=[];
    });
  };

    app.use(koaStaticCache(__dirname + "/views", {
      gzip: true,
      prefix: "/static",
      cache: false
    }));
    const router = new Router();
    var datas=[];
    router.get('/todos',  ctx => {
      getInformationFromDB(function (err, result) {
        if (err) console.log("Database error!");
        else
        datas=result;
        console.log("datas"+ datas.length);
        console.log("result"+ result.length);
      });
      ctx.body = datas;
    })


   
    router.get('/', async ctx => {
      ctx.body = "123";
    })



    app.use(router.routes())
    app.listen(8080);