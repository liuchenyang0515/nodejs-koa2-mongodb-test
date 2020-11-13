const router = require('koa-router')()

router.prefix('/api')

// 定义路由：模拟获取留言板列表
router.get('/list', async (ctx) => { // ctx就是req和res的集合
    const query = ctx.query // req功能
    console.log('query', query); // http://localhost:3000/api/list?a=123&b=456
    ctx.body = { // res功能
        errno: 0, 
        data: [
            { content: '留言1', user: '张三'},
            { content: '留言2', user: '李四'},
            { content: '留言3', user: '王五'}
        ]
    }
})

// 定义路由：模拟创建留言
router.post('/create', async (ctx) => {
    const body = ctx.request.body
    console.log(body);
    ctx.body = 'api create'
})


module.exports = router  // 输出