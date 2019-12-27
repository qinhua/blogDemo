const express = require('express')
const app = express();
app.use((req, res, next) => {
    console.log('请求开始', req.method, req.url)
    next();
})

app.use((req, res, next) => {
    // 假设在这里处理cookie
    req.cookie = {
        userId: 'abc123'
    }
    next();
})

app.use((req, res, next) => {
    // 假设处理 postData
    setTimeout(() => {
        req.body = {
            a: 1000,
            b: 200
        }
        next()
    }, 0)
})

app.use('/api', (req, res, next) => {
    console.log('处理 /api 路由')
    next()
})
app.get('/list', (req, res, next) => {
    console.log('处理 /list 路由')
    next()
})
app.post('/detail', (req, res, next) => {
    console.log('处理 /detail 路由')
    next()
})


app.get('/api/get-cookie', (req, res, next) => {
    console.log('/api/get-cookie')
    res.json({
        code: 0,
        data: req.cookie
    })
    next()
})

app.post('/api/get-post-data', (req, res, next) => {
    console.log('/api/get-post-data')
    res.json({
        code: 0,
        data: req.body
    })
    next()
})

app.use((req, res, next) => {
    console.log('处理 404')
    res.json({
        code: 1,
        msg: '404 not found'
    })
    next()
})


app.listen(3000, () => {
    console.log('service on port 3000')
})