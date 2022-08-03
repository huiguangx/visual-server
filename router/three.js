let express = require('express')
let router = express.Router()
let threeData = require('../mock/three.json')
router.get('/data', (req, res) => {
    res.send({msg:"我是three的路由地址", chartThree: threeData})
})
module.exports = router;