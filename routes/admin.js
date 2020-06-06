var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
var MyModel=require('./Userschema')
router.get('/',(req,res)=>{
    var msg='see here'
    if(req.session.admin!='admin'){
        req.session.admin='admin'
        res.render('admin-login',{msg})
}
    else{res.render('admin-login',{msg})}
})
router.post('/main',async (req,res)=>{
    try{
        if((req.body.email=='admin@gmail.com' && req.body.password=='admin')){
        var c,s,o,g;
        c=0; s=0; o=0; g=0; 
        var x=await MyModel.find({})
        x.forEach(b=>{
            b.reg=b.reg.toLowerCase() 
            if(b.reg=='self')s++;
            else if(b.reg=='group')g++;
            else if(b.reg=='corporate')c++;
            else if(b.reg=='others')o++;
        })
        x.sort(function(a,b){
            return b.date-a.date
        })
        console.log(x,g,s,o,c);
        res.render('admin-main',{g,s,c,o,x,y:x.slice(0,5)})}
        else{
            var msg="enter valid credentials"
            res.render('admin-login',{msg})
        }
    }catch(e){
        var msg=''
        res.render('admin-login',{msg})
    }
})
router.get('/q/:id',async (req,res,next)=>{
    try{
        var x=await MyModel.find({rid:req.params.id})
        res.send(x)
    }catch(e){
        res.send({})
    }
})

router.get('/logout',(req,res,next)=>{
    delete req.session.admin
    res.redirect('/')
})
module.exports=router