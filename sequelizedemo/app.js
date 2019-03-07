(async function () {
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('nodedemo', 'root', null, {
        host: 'localhost',
        dialect: 'mysql',
    });
    //测试数据库连接是否正常
    sequelize.authenticate().then((msg) => {
        console.log(msg);
    }).catch((err) => {
        console.log(err);
    })
    //定义对象模型 和数据库形成对应关系
    const todos = sequelize.define('todos', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        done: {
            type: Sequelize.ENUM([0, 1]),
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        }

    }, {
        freezeTableName: true,
        tableName: 'todos',
        //移除默认的updatedAt, createdAt
        timestamps: false,
    });

    //返回数据的总行数
    /* let rs=await todos.count();
    console.log(rs); */

    /*       let rs = await todos.findAndCountAll({
             limit: 2
         });
         console.log(rs.rows); */

    /* let rs =await todos.findAll({
        offset:2,
        limit:2
    })
    console.log(rs); */
    //console.log( rs.map(r => r.get('title')) );

    //查询出来显示调用 保存方法保存进数据库
    /*  let ts=await todos.findById(2);
     console.log(ts);
     ts.set('title','bjaaa');
     ts.save(); */
    /*  let ts=await todos.findById(2);
     ts.update({title:"dada"}).then((msg)=>{
        console.log(msg);
     }).catch((err)=>{
         console.log(err);
     }) */
    //查询出数据然后删除掉
    /*  let ts=await todos.findById(2);
     ts.destroy().then((msg)=>{
            console.log(msg);
     }).catch(()=>{

     });
 */
    //build 方法为向数据库添加数据的方法
    /*  let t1=todos.build({
         title:"第一次",
         done:0
     })
     t1.save().then((msg)=>{
          console.log(msg);
     }); */
    /*  let aa=await todos.findOne({
         where:{
             done:1
         }
     });
     console.log(aa.title);
     console.log(aa.id); */

    /*    let aa=await todos.findOne();
       console.log(aa.id);
       console.log(aa.title); */

    /*  let rs=await todos.findAll();
    console.log(rs.length); 
    rs.forEach(element => {
       console.log(element.title); 
    }); */
    //根据条件过滤数据
    /*  let rs=await todos.findAll({
       where:{
           done:{
               [Sequelize.Op.eq]:0
           }
       }
     })
     console.log(rs);
     console.log(rs.length); */
    /*   let rs=await todos.findAll({
          where: {
            [Sequelize.or]: [{title:'足球'}, {title:'篮球'}]
          }
        }); */
    let ss = await todos.findAll({
        where: {
            [Sequelize.Op.or]: [{
                count: {
                    [Sequelize.Op.gt]: 20
                }
            }, {
                done: {
                    [Sequelize.Op.eq]: 1
                }
            }]
        }
    });
    console.log(ss.length);
    /*  let rs=  await  todos.findAll({
          where: {
            count: {
              [Sequelize.Op.or]: [1, 5]
            }
          }
        });
        console.log(rs.length); */
    // 关联查询
    /*  const ContentModel = sequelize.define('contents', {
         id: {
             type: Sequelize.INTEGER,
             primaryKey: true,
             allowNull: true,
             autoIncrement: true
         },
         uid: { // 其他的表的字段，把当前字段定义为外键
             type: Sequelize.INTEGER(10),
             defaultValue: 0,
             references: {
                 model: todos,
                 key: 'id'
             }
         },
         desc: {
             type: Sequelize.STRING(255),
             allowNull: true,
             defaultValue: ''
         }
     }, {
         timestamps: false,
         freezeTableName: true,
         tableName: 'contents'
     }); */

    /*     let rs = await ContentModel.belongsTo(todos, {
            foreignKey: 'uid'
        });
        console.log(rs); */
    /*  ContentModel.belongsTo(todos, {
          foreignKey: 'uid'
      });
    let data2 = await ContentModel.findById(3, {
          include: [todos]
      });

      console.log(data2.todo.title);
      console.log(data2.desc);
      console.log(data2); */
    /* 
         todos.hasMany(ContentModel, {
            foreignKey: 'uid'
        });

        let data3 = await todos.findById(3, {
            include: [ContentModel]
        });
      

        console.log(data3); */

})();


/* const Sequelize = require('sequelize');
const sequelize = new Sequelize('shopmanagement', 'test', '123', {
    host: 'localhost',
    dialect: 'mysql',
});
//测试数据库连接是否正常
sequelize.authenticate().then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
})
//定义对象模型 和数据库形成对应关系
const todos = sequelize.define('todos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    done: {
        type: Sequelize.ENUM([0, 1]),
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }

}, {
    freezeTableName: true,
    tableName: 'todos',
    //移除默认的updatedAt, createdAt
    timestamps: false,
}) */
// 创建具体的数据对应 单个对象的事例
/* const tt=todos.build({
    done:1,
    title:"我就是测试"
}) */
//如果不显示的调用save方法则数据无法正常保存入数据库
//console.log(tt);
/* tt.save().then((msg)=>{
   console.log('保存成功');
}).catch((err)=>{
   console.log(err);
}) */

/*  todos.findById('2').then((msg)=>{
   
    console.log(msg);
    const aa=msg;
    aa.title="希望成功吧111";
    aa.save();
})
.then((msg1)=>{
    console.log("msg1"+msg1);
})
.catch((err)=>{
    console.log(err);
})  */

/* aa.update({
    title: 'a very different title now',
    done:1
  }).then((msg) => {
      console.log('保存成功');
  }) */
/* aa.title="jintian";
aa.done=0; */
/* aa.save().then((msg)=>{
    console.log('保存成功');
 }).catch((err)=>{
    console.log(err);
 }) */
//创建并添加数据 无需调用save方法
/*  todos.create({ title: 'foo', done:1 }).then(task => {
    // you can now access the newly created task via the variable task
    console.log(task);
  }) */
/*   const aa=todos.findById(2).then((msg)=>{
      console.log(msg);
  });
  console.log(aa); */
/*   todos.update({description : 'test_description_2000'}, {id : '2'}).on('success', function(msg){
    console.log(msg);
}).on('failure', function(err){
    console.log(err);
}); */

/* .then(()=>{
  aa.set('title','该吃饭了')
  aa.save();
})
.then((msg)=>{
    console.log(msg);
}); */