var multer=require('multer')
var storage=multer.diskStorage({
    destination:(req,file,path)=>
    {path(null,'public/images')},

    filename:(req,file,path)=>{
    path(null,file.originalname)}
    
 });


var upload=multer({storage:storage})
module.exports=upload