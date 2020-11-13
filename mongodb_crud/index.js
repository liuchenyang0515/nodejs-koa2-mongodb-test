// 体会nodejs连接mongodb的能力，不会真正用到路由上
// mongoose 对接路由的功能

const { ResumeToken } = require('mongodb')

const MongoClient = require('mongodb').MongoClient

// 对于数据库来说，compass、数据库、nodejs都是客户端

const url = 'mongodb://localhost:27017' // 本地启动mongodb服务
const dbName = 'comment1'

MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        console.log('mongodb连接出错')
        return
    }
    console.log('mongodb连接成功')
    // 切换数据库，命令行use
    const db = client.db(dbName) 
    // 切换到指定的集合collection
    const userCollection = db.collection('users')
    // // 查询数据
    // userCollection.find().sort({_id : -1}).toArray((err, result) => { // _id:-1代表按照插入时间排序由大到小，最近插入在前
    //     if (err) {
    //         console.log('查询数据出错', err)
    //         return
    //     }
    //     console.log('查询成功', result)
    // })

    // // 新增数据
    // userCollection.insertOne({
    //     username: 'shuangyue',
    //     password: 'abc',
    //     age: 30,
    //     city: 'beijing'
    // }, (err, result) => {
    //     if (err) {
    //         console.log('查询数据出错', err)
    //         return
    //     }
    //     console.log('插入后的返回结果', result.insertedCount, result.insertedId)
    // })
    

    // // 修改数据
    // userCollection.updateOne(
    //     { username: 'zhangsan' },
    //     { $set: {age: 21, city: 'beijing'}}, // 修改的内容
    //     (err, result) => {
    //         if (err) {
    //             console.log('修改数据出错', err)
    //             return
    //         }
    //         console.log('修改后的返回结果', result.modifiedCount)
    //     }
    // )

    userCollection.deleteOne({username:'wangwu'}, (err, result) => {
        if (err) {
            console.log('修改数据出错', err)
            return
        }
        console.log('删除成功')
    })

    // 关闭
    // client.close()
})
