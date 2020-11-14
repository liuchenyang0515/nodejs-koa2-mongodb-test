// Koa2 操作 cookie
const Koa = require('koa')
const app = new Koa()

// 模拟session，用户信息存到session
const SESSION_DATA = {
    '123': {
        user: 'zhangsan',
        age: 20
    },
    '456': {
        user: 'lisi'
    },
    '789': {
        user: 'lcy'
    }
}

// ctx 读音context上下文的简写 
app.use(async ctx => {

    // // 设置cookie
    // ctx.cookies.set('a', 100)
    // // 获取 cookie
    // console.log('cookie is ', ctx.cookies.get('a'))

    // 假如用户登陆成功，服务端设置cookie(userId)
    ctx.cookies.set('userId', '123')

    // 其它接口，获取cookie
    const userId = ctx.cookies.get('userId')
    const userInfo = SESSION_DATA[userId]
    userInfo.user // 用户名

    ctx.body = 'cookie test by Koa2'
})

app.listen(3000)