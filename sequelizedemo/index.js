const koa = require("koa");
const fs = require("fs");

const app = new koa();

function getIndexPage(url) {
    return new Promise((resolve, reject) => {
        try {
            let file = fs.readFileSync(url);
            resolve(file);
        } catch (error) {
            reject(error);
        }
    })
}



app.use(async ctx => {
    //console.log(ctx.request.url);
    let bodycontent = '/404.html';
    switch (key) {
        case '/404.html':
         bodycontent= await getIndexPage(__dirname+"/404.html");
            break;
        case value:

            break;


    }
})



app.listen(8088, () => {
    console.log('服务已经启动');
});