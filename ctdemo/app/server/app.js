( async function(){
   const Koa=require("koa");
   const KoaStaticCache=require("koa-static-cache");
   const router=require("./router/main.js")
   const KoaBodyParser=require("koa-bodyparser");
   var cors = require('koa2-cors');

   const app=new Koa();
   
   
   app.use(KoaBodyParser());
   
   
   app.use(cors({
    origin: function(ctx) {
      if (ctx.url === '/test') {
        return false;
      }
      return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  }));
   app.use(router.routes());

   app.use(KoaStaticCache('/public',{
       prefix:'/public',
       gzip:true
   }))

  

   




   app.listen(8088);


}



)();