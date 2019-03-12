( async function(){
   const Koa=require("koa");
   const KoaStaticCache=require("koa-static-cache");
   const router=require("./router/main.js")
   const KoaBodyParser=require("koa-bodyparser");
   //const KeyGrip=require("keygrip");
   const session=require("koa-session");
   //var cors = require('koa2-cors');

   const app=new Koa();
   

   app.keys = ['some bj secret aa hurr11'];
   
   const CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  };
   
  app.use(session(CONFIG, app));

   app.use(KoaBodyParser());
   
   
   /* app.use(cors({
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
  })); */
   app.use(router.routes());

   app.use(KoaStaticCache('/public',{
       prefix:'/public',
       gzip:true
   }))
   //app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
  

   




   app.listen(8088);


}



)();