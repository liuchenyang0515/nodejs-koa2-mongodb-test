const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {// 对应views文件夹下名字为index的pug文件
    title: 'Hello Koa 21!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

// 测试session，记录访问次数
// session 常用于登陆，存储用户信息(cookie 对应)，用户访问次数作为用户信息
// cookie是登陆成功之后设置的，用户尚未登录也可以设置cookie
router.get('/session-test', async (ctx, next) => {
  if (ctx.session.viewcount == null) {
    // 用户尚未访问
    ctx.session.viewcount = 0
  }
  // 用户已经访问过了
  ++ctx.session.viewcount
  // 返回
  ctx.body = {
    title: 'session-test',
    viewcount: ctx.session.viewcount
  }
})

module.exports = router
