const { truncateSync } = require('fs')
const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const url = req.url
    const path = url.split('?')[0]
    const queryStr = url.split('?')[1]
    const method = req.method  
    const query = querystring.parse(queryStr)

    console.log('query is' + JSON.stringify(query));

     // 定义路由：模拟获取留言板列表
    if (path === '/api/list' && method === 'GET') {
        // return res.end('this is list router')
        const result = {
            errno: 0,
            data: [
                { user: '张三', content: '留言1' },
                { user: '李四', content: '留言2' }
            ]
        }

        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        return res.end(JSON.stringify(result))
    }
    if (path === '/api/create' && method === 'POST') {//定义路由：模拟创建留言
        const reqType = req.headers['content-type'];
        let bodyStr = ''
        req.on('data', chunk => { // 服务端这么去识别流，并接收数据
             // chunk是“流”的每一段数据
             bodyStr = bodyStr + chunk.toString()

        })

        req.on('end', () => { // 服务端怎么知道流完了
            if (reqType === 'application/json') {
                const body = JSON.parse(bodyStr)
                console.log('bodyStr is ', body);
            }
            return res.end('接收完成') // 异步的
        })
        return
        
        // const result = {
        //     errno: 0, 
        //     message: '创建成功'
        // }
        // res.writeHead(200, { 'Content-type': 'application/json' })
        // return res.end(JSON.stringify(result))
    }
    // res.writeHead(404, {
    //     'Content-type': 'text/plain'
    // })
    // return res.end('404 Not Found')

    res.writeHead(404, {
        'Content-type': 'text/html'
    })
    return res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>404</title>
            </head>
            <body>
                <h1>404 Not Found</h1>
            </body>
        </html>
    `)
})

server.listen(3000); // 可以监听http请求
console.log('http请求已经被监听，3000端口');