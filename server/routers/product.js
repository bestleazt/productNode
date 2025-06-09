const express = require('express')
const router = express.Router()
const {create,list,read,update,remove} = require('../controller/product')

router.get('/product',list)
router.get('/product/:productId',read)
router.post('/product',create)
router.put('/product/:productId',update)
router.delete('/product/:productId',remove)

module.exports = router