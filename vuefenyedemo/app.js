(async function run() {
  // 引入koa 框架
  const Koa = require("koa");
  //引入koa 静态文件处理
  const koaStaticCache = require("koa-static-cache");
  //引入koa路由
  const koaRouter = require("koa-router");
  //引入mysql2
  const mysql = require("mysql2/promise");

  const app = new Koa();

  //设置路由
  const router = new koaRouter();

  /*  const handler = async (ctx, next) => {
     try {
       await next()
     } catch (error) {
       ctx.response.body = {
         code: '00000',
         message: '服务器异常',
         desc: error.message
       }
     }
   } */

  // 异常捕获逻辑，一定要放在第一个中间件
  /*   app.use(handler) */


  //设置静态文件处理
  app.use(koaStaticCache(__dirname + "/views", {
    cacheControl: false,
    prefix: "/static",
    gzip: true
  }))

  //设置mysql 连接
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodedemo'
  })

  let pageSize = 4;
  let pageNum = 1;
  let pageCount='';
  

  router.get("/todos", async ctx => {
  
     
   let countSql="";
    //if
    let type=ctx.query.type;
    let sql="";
    if(type)
    {
       sql="SELECT * FROM `todos` where  done ="+type+" limit "+pageSize+"  offset "+(pageNum-1)*pageSize+" ";
       countSql="SELECT * FROM `todos` where done="+type+"";
    }
    else
    {
      sql="SELECT * FROM `todos`   limit "+pageSize+"  offset "+(pageNum-1)*pageSize+" ";
      countSql="SELECT * FROM `todos`";
    }
  //  console.log(sql);
    let [arr]=  await connection.query(countSql);
    pageCount=Math.ceil(arr.length/pageSize);
    pageNum=ctx.query.index || 1;
  
   
    let [a] = await connection.query(sql);
    ctx.body = 
    {
      a,
      pageCount
    }
    ;
  })

  //将路由注册到中间件中
  app.use(router.routes());
  app.listen(8080, () => {
    console.log("启动了");
  });







})();