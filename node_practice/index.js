const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('已经收到http请求');
    const url = req.url
    console.log('url is:' + url);
    res.end('hello world')
})

server.listen(3000); // 可以监听http请求
console.log('http请求已经被监听，3000端口');