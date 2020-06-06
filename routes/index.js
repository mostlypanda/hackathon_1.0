var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
var upload=require('./multer')
var MyModel=require('./Userschema')
var ai=require('./autiinc')
mongoose.connect('mongodb+srv://test:test@cluster0-nc9ml.mongodb.net/test?retryWrites=true&w=majority',
                {useNewUrlParser: true,useUnifiedTopology: true });

router.get('/',async (req,res,next)=>{
  res.redirect('/home')
})

router.get('/home',(req,res)=>{
  res.render('home')
})
router.get('/a', async function(req, res, next) {
  var msg=req.query.valid
  res.render('index', { title: 'Express' ,msg});
});


router.post('/preview',upload.any('file'),async (req,res,next)=>{
 try{
  req.session.email=req.body._id
  console.log(req.body,req.files[0].filename);
  var x=await ai.findById('0') 
  await ai.findByIdAndUpdate(x._id,{number:x.number+1})
  x=x.number
  x=""+x
  var y=''
  for(var i=0;i<6-x.length;i++){
    y+='0'
  }
  x=y+x
  var obj=req.body
  obj.rid=x
  obj.doc=req.files[0].filename
  obj.ispreview=false
  obj.date=new Date().getTime()
  var x1=new MyModel(obj)
  console.log(obj);
  console.log('2');
  await x1.save()
  if('b12' in req.body) {res.render('preview',{obj})
  }
  else{
    res.redirect('/completeregisteration/'+obj._id)
  }
}catch(e){ var msg='email already used'
delete req.session.email
res.redirect('/a?valid=' + msg)
}
  
})



router.get('/deleteandreedit/:id',async (req,res,next)=>{
  try{
    await MyModel.findByIdAndDelete(req.params.id)
    res.redirect('/a')
  }catch(e){
    res.send(e.message)
  }
})


router.get('/completeregisteration/:id',async (req,res,next)=>{
  try{
    
    var x= await MyModel.findById(req.params.id)
    res.render('user',{x})
    
  }catch(e){
    res.redirect('/home')
  }
})


module.exports = router;
