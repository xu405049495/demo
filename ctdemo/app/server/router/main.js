const KoaRouter=require("koa-router");
const Models=require('../models/index.js');
const router=new KoaRouter();


//console.log(Models);
router.get('/', async ctx=>{
  //ctx.response.set("Access-Control-Allow-Origin","*");
  let rs=await Models.contents.findAndCountAll({
    limit:3,
    offset:0,
    include:{
      model:Models.users
    }
  })
   let data=rs.rows.map(d=>{
      return {
        id: d.id,
        title: d.title,
        content: d.content,
        user_id: d.user_id,
        username: d.username,
        created_at: d.createdAt,
        like_count: d.like_count,
        comment_count: d.comment_count
      }

    })

   ctx.body={
     code:0,
     count:rs.count,
     data
   };
   

  //console.log(Models);
})

module.exports=router;