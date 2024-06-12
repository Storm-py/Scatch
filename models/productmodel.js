const mongoose=require('mongoose')

const productSchema= mongoose.Schema({
 image:String,
 name:String,
 price:Number,
 discount:{
    type:Number,
    default:0,
 },
 bgcolor:String,
 panelcolors:String,
 textcolors:String,
})
module.exports=mongoose.model('product',productSchema)