( async function(){
   const Koa=require("koa");
   const KoaStaticCache=require("koa-static-cache");
   const router=require("./router/main.js")
   const KoaBodyParser=require("koa-bodyparser");

   const app=new Koa();
   
   app.use(async (ctx,next)=>{
       ctx.response.set("Access-Control-Allow-Origin","*");
     await    next();
   })


   app.use(router.routes());
   app.use(KoaBodyParser());
   app.use(KoaStaticCache('/public',{
       prefix:'/public',
       gzip:true
   }))

  

   




   app.listen(8088);


}



)();