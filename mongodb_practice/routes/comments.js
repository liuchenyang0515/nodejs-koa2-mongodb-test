const router = require('koa-router')()
const { Comment } = require('../db/model')
router.prefix('/api')

// 定义路由：模拟获取留言板列表
router.get('/list', async (ctx) => { // ctx就是req和res的集合
    const query = ctx.query // req功能
    console.log('query', query); // http://localhost:3000/api/list?a=123&b=456
    // 获取数据库列表, 按最近时间在上排序
    const commentList = await Comment.find().sort({_id: -1})
    ctx.body = { // res功能
        errno: 0, 
        data: commentList
    }
})

// 定义路由：模拟创建留言
router.post('/create', async (ctx) => {
    const body = ctx.request.body
    console.log('body', body)
    // 获取数据
    const { content, username } = body
    // 插入到数据库
    const newComment = await Comment.create({
        content,
        username
    })
    ctx.body = {
        errno: 0,
        message: '成功',
        data: newComment
    }
})


module.exports = router  // 输出