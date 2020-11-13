D:\MongoDB\Server\4.2\bin>mongod.exe --dbpath D:\MongoDB\Server\4.2\data\db
启动mongodb数据库，然后用MongoDB Compass查看和操作数据
http://localhost:3000/api/list查看留言数据<br><br>
用postman发送post数据<br>
发送的示例如下：
```javascript
{
    "content":"今天天气不错",
    "username": "lisi"
}
```
