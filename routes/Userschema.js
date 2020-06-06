var mongoose=require('mongoose')
var Schema = mongoose.Schema;
var MyModel = mongoose.model('Test',new Schema({ 
              name:{type:String},
              number:{type:Number},
              _id:{type:String},
              doc:{type:String},
              reg:{type:String},
              tickets:{type:Number},
              date:{type:Number,default:new Date().getTime()},
              isPreview:{type:Boolean,default:false},
              rid:{type:String,default:'0'}
              }));
module.exports=MyModel;