(
   async function(){

    const Koa=require("koa");
  
 
    const app=new Koa();
    app.use(ctx=>{
        ctx.cookies.set('aa',123,{
            httpOnly:false
        }); 
    })
    
    app.listen(7788);

    }
)();