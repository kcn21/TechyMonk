var mongoose=require('mongoose')
var express=require('express')
var bodyParser=require('body-parser')
var cors=require('cors')
var app=express()
app.use(bodyParser.json())
app.use(cors())
var User=require('./schema/users')
mongoose.connect("mongodb://127.0.0.1:27017/Shopping",(err)=>{
    if(err)
        console.log(err)
    else
        console.log("Mongoose is connected")
})
app.post('/register',function(req,res){
    console.log('POST request')
    var userData=req.body
    console.log(userData)
    var user=new User(userData)
    user.save((err,registeredUser)=>{
        if(err)
            res.status(401).send('Not Registered')
        else
            res.status(200).send(registeredUser)
    })
})
app.post('/login',function(req,res){
    //console.log("POST Request For Login")
    var userData=req.body
    //console.log(userData)
    User.findOne({username:userData.username},(erro,user)=>{
        if(erro)
            console.log(erro)
        else
        {
            if(!user)
            {
                res.status(401).send('Invalid Username')
            }
            else if(user.password!=userData.password)
            {
                res.status(401).send('Invalid Password')
            }
            else
            {
                res.status(200).send(user)
            }
        }
    })
})
app.listen(8081,()=>console.log('Server is working'))