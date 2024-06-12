const cookieParser = require('cookie-parser')
const express=require('express')
const path=require('path')
const app =express()
const ownerRoutes=require('./routes/ownerRoutes')
const productRoutes=require('./routes/productRoutes')
const userRoutes=require('./routes/userRoutes')

const db=require('./config/mongooseconnection')

app.set('view engine','ejs')
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/owners',ownerRoutes)
app.use('/products',productRoutes)
app.use('/users',userRoutes)


app.get('/',function(req,res){
    res.send('hey')
})



app.listen('3000')