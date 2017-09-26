/**
 * Created by qiwei on 2017/9/16.
 */
const request = require('request');
const rp = require('request-promise');
let body='返回内容';
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
let qingqiu = new RequestNews();
module.exports = qingqiu;