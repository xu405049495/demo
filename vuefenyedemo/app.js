(async function run() {
  // 引入koa 框架
  const Koa = require("koa");
  //引入koa 静态文件处理
  const koaStaticCache = require("koa-static-cache");
  //引入koa路由
  const koaRouter = require("koa-router");
  //引入mysql2
  const mysql = require("mysql2/promise");
  //引入koa bodyparse
  const koaBodyParser=require("koa-bodyparser")

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
    //database: 'nodedemo'
    database: 'shopmanagement'
  })

  let pageSize = 4;
  let pageNum = 1;
  let pageCount = '';


  router.get("/todos", async ctx => {


    let countSql = "";

    let type = ctx.query.type;
    let sql = "";
    if (type) {
      sql = "SELECT * FROM `todos` where  done =" + type + " limit " + pageSize + "  offset " + (pageNum - 1) * pageSize + " ";
      countSql = "SELECT * FROM `todos` where done=" + type + "";
    } else {
      sql = "SELECT * FROM `todos`   limit " + pageSize + "  offset " + (pageNum - 1) * pageSize + " ";
      countSql = "SELECT * FROM `todos`";
    }

    let [arr] = await connection.query(countSql);
    pageCount = Math.ceil(arr.length / pageSize);
    pageNum = ctx.query.index || 1;


    let [a] = await connection.query(sql);
    ctx.body = {
      a,
      pageCount
    };
  })

  router.post('/add',async ctx=>{
    console.log(ctx.request);
    if(ctx.request.body.title){

      ctx.body={
        code:"1",
        msg:"titile字段不能为空"
      };
    }
      let title=ctx.request.body.title;
      console.log(title);
      let [rs] = await connection.query("insert into todos(??,??) values(?,?)",["title","done",title,1]);

      
      if(rs.affectedRows>0){
        //ctx.body=
        ctx.body={
          code:"0",
          msg:"添加成功"
        };
      } else{
        ctx.body={
          code:"1",
          msg:"添加失败"
        };
       // ctx.body="添加失败";
      }

  })
  router.post('/toogle',async ctx=>{
    let id=ctx.request.body.id;
    let done=ctx.request.body.done;

    console.log(id);
    console.log(done);
    if(!id||!done){
      ctx.body={
        code:"1",
        msg:"参数不能为空"
      };
    }
    let [rs]=await connection.query("update todos set ?? = ? where ??=?",["done",done,"id",id])

    if(rs.affectedRows>0){
      //ctx.body=
      ctx.body={
        code:"0",
        msg:"修改成功"
      };
    } else{
      ctx.body={
        code:"1",
        msg:"修改失败"
      };
     // ctx.body="添加失败";
    }

  })

  router.post('/remove',async ctx=>{
    let id=ctx.request.body.id;
    if(!id){
      ctx.body={
        code:"1",
        msg:"参数不能为空"
      };
    }

    let[rs]= await connection.query("delete from todos where ?? = ?",["id",id]);
    
    if(rs.affectedRows>0){
      ctx.body={
        code:"0",
        msg:"删除成功"
      };
    }else{
      ctx.body={
        code:"1",
        msg:"删除失败"
      };
    }


  })
  app.use(koaBodyParser())
  //将路由注册到中间件中
  app.use(router.routes());
  app.listen(8080, () => {
    console.log("启动了");
  });
})();