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

module.exports = router
