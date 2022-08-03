let express = require('express')
let router = express.Router()
let twoData = require('../mock/two.json')
router.get('/data', (req, res) => {
    res.send({msg:"我是two的路由地址", chartTwo: twoData})
})
module.exports = router;