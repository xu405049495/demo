const KoaRouter = require("koa-router");
const Models = require('../models/index.js');
const md5 = require("md5");

const router = new KoaRouter();





router.get('/', async ctx => {

  console.log('cookieaaa' + ctx.session.uid);
  /* console.log('cookieaaa'+ ctx.cookies.get('uid',{
    signed: true
  }));   */
  /* console.log('cookie2'+ ctx.cookies.get('username.sig',{
    signed: true
  }));  */
  //
  //获取queryString 传过来的数据
  let page = ctx.query.page || 1;
  console.log("page" + ctx.query.page);
  let prepage = ctx.query.prepage || 2;
  let offset = (page - 1) * prepage;

  let rs = await Models.contents.findAndCountAll({
    limit: 2,
    offset,
    include: {
      model: Models.users
    }
  })
  let data = rs.rows.map(d => {
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

  ctx.body = {
    code: 0,
    count: rs.count,
    data
  };
  router.post('/register', async ctx => {

    let username = ctx.request.body.username.trim();
    let password = ctx.request.body.password.trim();
    let repassword = ctx.request.body.repassword.trim();
    if (username == '' || password == '' || repassword == '') {
      return ctx.body = {
        code: 1,
        msg: '用户名或者密码不能为空'
      };
    }
    if (password != repassword) {
      return ctx.body = {
        code: 2,
        msg: '两次密不一致'
      }
    }

    let user = await Models.users.findOne({
      where: {
        username
      }
    });
    console.log(user);
    if (user !== null) {

      return ctx.body = {
        code: 3,
        msg: '当前用户已经存在'
      }
    }
    let newuser = await Models.users.build({
      username,
      password: md5(password)
    }).save();
    ctx.body = {
      code: 0,
      data: {
        id: newuser.id,
        username: newuser.username
      }
    }

  });
  router.post('/login', async ctx => {
    let username = ctx.request.body.username.trim();
    let password = ctx.request.body.password.trim();

    let user = await Models.users.findOne({
      where: {
        username
      }
    });

    if (user === null) {
      return ctx.body = {
        code: 1,
        data: '不存在此用户'
      }
    }
    if (user.get('password') !== md5(password)) {
      return ctx.body = {
        code: 1,
        data: '密码错误'
      }
    }

    ctx.session.uid = 1;
    //设置为true话浏览器端 就不能再操作 获取不到了.但是响应中还能看到
    /*  ctx.cookies.set('uid', user.get('id'), {
       httpOnly: false,
       signed: true
      // secure: true
     }) 
      ctx.cookies.set('username',user.get('username'),{
        httpOnly:false,
        signed: true
      }) */
    /*  console.log('uid' + user.get('id')); */
    //  ctx.cookies.set('name', 'tobi', { signed: true });
    //ctx.cookies.set('uid',user.get('id'),{
    //domain: 'localhost',  // 写cookie所在的域名
    // path: '/index',       // 写cookie所在的路径
    //maxAge: 10 * 60 * 1000, // cookie有效时长
    //expires: new Date('2017-02-15'),  // cookie失效时间
    // httpOnly: false ,  // 是否只用于http请求中获取
    //overwrite: false  // 是否允许重写
    // });
    ctx.body = {
      code: 0,
      data: {
        id: user.get('id'),
        username: user.get('username')
      }
    }
  })
  router.post('/like', async ctx => {

    let id = ctx.request.body.id;
    let uid = ctx.session.uid;

    let likein = await Models.likes.findOne({
      where: {
        user_id: uid,
        content_id: id
      }
    });
    //console.log(likein);
   // console.log('aa'+likein);
   if(likein!==null){
     console.log('heheda');
     return ctx.body={
       code:3,
       data:'不允许重复点赞'
     }
   }


    let likem = await Models.likes.build({
      content_id: id,
      user_id: uid
    }).save();
    let ctm = await Models.contents.findOne({
      where: {
        id
      }
    });
    // console.log('ctm'+ctm);
    ctm.set('like_count', ctm.get('like_count') + 1);
    ctm.save();
    ctx.body = {
      code: 0,
      data: ctm
    }
    //console.log(ctx.request.body);
    //console.log(id,uid);

  })


  //console.log(Models);
})

module.exports = router;