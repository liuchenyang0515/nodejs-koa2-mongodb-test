const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')

const index = require('./routes/index')
const users = require('./routes/users')
const comments = require('./routes/comments')


// error handler
onerror(app)

// middlewares
app.use(bodyparser({ // request body的转换
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger()) // 日志格式
app.use(require('koa-static')(__dirname + '/public')) // 静态文件服务

app.use(views(__dirname + '/views', {//服务端模版引擎，pug里面简写html格式，不用再写尖括号<>标签
  extension: 'pug'
}))

app.keys = ['er#@$%^we23t'] // 密钥
// 自动配置了cookie和session
app.use(session({
  // 配置cookie
  cookie: {
    path: '/', // cookie在根目录和该根目录的子目录下有效 localhost:3000
    httpOnly: true, // cookie只允许服务端操作
    maxAge: 24 * 60 * 60 * 1000 // cookie的过期时间
  }
}))



// logger  打印当前请求花费时间
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// // 模拟登录(为了使用中间件)
// app.use(async (ctx, next) => {
//   const query = ctx.query
//   if (query.user === 'zhangsan') {
//     // 模拟登录成功
//     await next() // 执行下一步中间件
//   } else {
//     // 模拟登录失败
//     ctx.body = '请登录'
//   }
// })


// routes 注册路由
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(comments.routes(), comments.allowedMethods())
// allowedMethods()对于404或者返回是空的情况的一种补充

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
