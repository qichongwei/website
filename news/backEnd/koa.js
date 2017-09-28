const Koa = require('koa');
const cors = require('koa2-cors');
const qingqiu=require('./middleware/index');
const app = new Koa();

class RequestNews {
    async news(ctx, next) {
        let a = encodeURI(ctx.query.channel);
        let b = encodeURI(ctx.query.start);
        await rp(`https://way.jd.com/jisuapi/get?channel=${a}&num=10&start=${b}&appkey=5246bc3075be75d0cddfa10d96ffe7f3`).then(function (responce) {
            body=JSON.parse(responce).result.result.list;
        }).catch(function (err) {
            console.error(err);
        });
        ctx.body =body;
    }
}

app.use(cors()).use(qingqiu.news);
app.listen(4005);