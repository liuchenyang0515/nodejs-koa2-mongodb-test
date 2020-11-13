// 演示 async await执行顺序
// 代码放在浏览器执行， 这里只是保存一下
// 加载一张图片
async function getImg(url = '') {
    await fetch(url)
}

async function fn() {
    const url = 'https://profile.csdnimg.cn/1/F/D/3_qq_34115899'
    const start = Date.now() 
    await getImg(url)
    const ms = Date.now() - start
    console.log(`加载图片花费了${ms}毫秒`);
}

fn()