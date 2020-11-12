const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const url = req.url
    const path = url.split('?')[0]
    const queryStr = url.split('?')[1]
    const method = req.method
    console.log('url is:' + url)
    console.log('method is:' + method)

    // 解析querystring， 可以用nodejs自带的querystring，下面是手动实现
    // const query = {}
    // // 还要判断favicon
    // queryStr && queryStr.split('&').forEach((item) => {
    //     const key = item.split('=')[0]
    //     const val = item.split('=')[1]
    //     query[key] = val;
    // })
    
    const query = querystring.parse(queryStr)
    console.log('query is' + JSON.stringify(query));

     // 定义路由：模拟获取留言板列表
    if (path === '/api/list' && method === 'GET') {
        if (query.filterType === '1') {
            return res.end('this is list router, all')
        }
        if (query.filterType === '2') {
            return res.end('this is list router, only mine')
        }
        return res.end('this is list router')
    }
    if (path === '/api/create' && method === 'POST') {//定义路由：模拟创建留言
        return res.end('this is create router')
    } 
    return res.end('404')
})

server.listen(3000); // 可以监听http请求
console.log('http请求已经被监听，3000端口');