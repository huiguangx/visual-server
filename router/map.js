let express = require('express')
let router = express.Router()
// 数据引入
let mapData = require('../mock/china.json')
router.get('/data', (req, res) => {
    res.send({msg:"我是one的路由地址", chartMap: mapData})// 返回数据给前端
})
module.exports = router;