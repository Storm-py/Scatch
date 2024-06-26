const express =require('express')
const router=express()
const upload =require('../config/multer-config')
const productModel=require('../models/productmodel')

router.post('/create',upload.single('image'),async function(req,res){
    let{name,price,discount,bgcolor,panelcolor,textcolor}=req.body
   const product= await productModel.create({
    image:req.file.buffer,
    name,
    price,
    discount,
    bgcolor,
    panelcolor,
    textcolor,
   })
   req.flash('success','product created successfully')
    res.redirect('/owners/admin')
})


module.exports=router;