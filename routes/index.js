const express=require('express')
const router=express()
const isloggedIn=require('../middlewars/isLoggedIn')
const productModel=require('../models/productmodel')


router.get('/',function(req,res){
    let error=req.flash('error')
    res.render('index',{error})
})
router.get('/shop',isloggedIn,async function(req,res){
    let products=await productModel.find()
    res.render('shop',{products})
})
module.exports=router