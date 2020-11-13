const Koa = require('koa')
const app = new Koa()

// ctx 读音context上下文的简写 
app.use(async ctx => {
    ctx.body = 'hello world'
}) 

app.listen(3000)