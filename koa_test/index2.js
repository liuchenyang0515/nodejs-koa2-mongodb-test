// koa2中间件的洋葱圈模型

const Koa = require('koa')
const app = new Koa()

// 有请求过来会依次执行中间件
// logger
app.use(async (ctx, next) => {
    await next()
    const rt = ctx.response.get('X-Response-Time')
    console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})


// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    ctx.set('X-Response-Time', `${ms}ms`)
})

// response
app.use(async (ctx, next) => {
    ctx.body = 'Hello world'
})

app.listen(3000)

console.log('koa2 开始监听3000端口');