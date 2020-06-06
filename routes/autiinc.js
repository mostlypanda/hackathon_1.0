var mongoose=require('mongoose')
var Schema = mongoose.Schema;
var ai = mongoose.model('ai',new Schema({ 
    number:{type:Number,default:0},
    _id:{type:String},
    }));
module.exports=ai;