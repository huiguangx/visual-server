let express = require('express');
let app = express();
// 后端设置跨域
app.use(function (req, res, next) { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content.length, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    next();
})
// 引用路由文件
let chartOne = require('./router/one')
let chartTwo = require('./router/two')
let chartThree = require('./router/three')
let chartFour = require('./router/four')
let chartMap = require('./router/map')
// 使用中间件来配置路由
app.use('/one', chartOne);
app.use('/two', chartTwo);
app.use('/three', chartThree);
app.use('/four', chartFour);
app.use('/map', chartMap)
// 监听端口
app.listen(8888)