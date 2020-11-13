// 数据模型（规范数据格式）

const mongoose = require('./db')


// 定义Schema(数据规范)
const UserSchema = mongoose.Schema({
    username: {
        type: String, 
        required: true, // 不给这个参数就不存, 必须
        unique: true  // 唯一不重复
    },
    password: String, 
    age: Number,
    city: String, 
    // 性别
    gender: {
        type: Number,
        default: 0 // 0-保密, 1-男, 2-女
    }
}, {
    timestamps: true //  时间戳，自动添加文档创建时间等
})

// 定义Model
const User = mongoose.model('user', UserSchema)


// 定义Comment Schema
const CommentSchema = mongoose.Schema({
    content: {
        type: String, 
        required: true // 必须
    },
    username: String // 用户名
}, {
    timestamps: true
})

// 定义Comment Model, 自动创建collection
const Comment = mongoose.model('comment', CommentSchema)

module.exports = {
    User,
    Comment
}