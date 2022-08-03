let express = require('express')
let router = express.Router()
// 数据引入
let oneData = require('../mock/one.json')
router.get('/data', (req, res) => {
    res.send({msg:"我是one的路由地址", chartOne: oneData})// 返回数据给前端
})
module.exports = router;