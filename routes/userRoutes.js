const express =require('express')
const router=express()
const{registerUser,loginUser}=require('../controllers/authController')


router.get('/',function(req,res){
    res.send('yoo nigga')
})
router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports=router;