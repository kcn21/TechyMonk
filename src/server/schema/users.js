var mongoose=require('mongoose')
var UserSchema=mongoose.Schema({
    username:String,
    password:String,
    emailid:String,

})
var User=mongoose.model('Users',UserSchema,'users')
module.exports=User