const cookieParser = require('cookie-parser')
const express=require('express')
const cookieParser=require('cookie-parser')
const path=require('path')
const app =express()

const db=require('./config/mongooseconnection')

app.set('view engine','ejs')
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',function(req,res){
    res.send('hey')
})



app.listen('3000')