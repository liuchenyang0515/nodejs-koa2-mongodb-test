// 使用model

const { User } = require('./model')

// 定义一个async匿名函数并执行，为了能用await
!(async () => {
    // // 新增数据
    // const zhangsan = new User({
    //     username: 'zhangsan',
    //     password: 'abc',
    //     age: 20,
    //     city: 'beijing',
    //     gender: 1
    // })
    // zhangsan.save()

    // 新增数据2
    // const lisi = await User.create({
    //     username: 'lisi',
    //     password: '123',
    //     age: 23,
    //     city: 'shanghai',
    // })
    // console.log('lisi创建完成', lisi);

    // // 查询数据，返回的数组
    // // const userList = await User.find({username: 'zhangsan'})
    // const userList = await User.find().sort({age: -1})
    // console.log('userList查询结果', userList)


    // 查询单条数据，返回的对象
    const user = await User.findOne({ username: 'zhangsan' })
    console.log('user查询结果', user)
})()