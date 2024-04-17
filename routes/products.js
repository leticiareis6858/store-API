const express=require('express')
const router=express.Router()

const {getAllProducts,  getAllProductsStatic} =require('../controllers/products')

router.route('/').get(getAllProducts) //main route
router.route('/static').get(getAllProductsStatic)

module.exports=router