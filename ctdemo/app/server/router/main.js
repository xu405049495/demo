const KoaRouter = require("koa-router");
const Models = require('../models/index.js');
const md5 = require("md5");
const router = new KoaRouter();





router.get('/', async ctx => {
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
    ctx.cookies.set('uid',user.get('id'),{
      httpOnly:false

    })
   /*  ctx.cookies.set('second',222,{
      httpOnly:false
    }) */
    console.log('uid'+user.get('id'));
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



  //console.log(Models);
})

module.exports = router;