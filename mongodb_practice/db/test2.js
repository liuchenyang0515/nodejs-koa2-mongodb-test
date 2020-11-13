// 使用model

const { User } = require('./model')

// 定义一个async匿名函数并执行，为了能用await
!(async () => {
    // // 更新
    // const updateResult = await User.findOneAndUpdate(
    //     { username: 'zhangsan' }, // 条件
    //     { age: 30  }, // 更新的内容
    //     {
    //         new: true // 返回更新后的数据，默认不写是返回更新之前的数据
    //     }
    // )
    // console.log('更新的返回结果', updateResult)

    // 删除
    const removeResult = await User.remove({ username: 'lisi' })
    console.log('删除的返回结果', removeResult)

})()