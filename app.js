require('dotenv').config();
const express=require('express');
const bp=require('body-parser');
const ejs=require('ejs');
const mongoose=require('mongoose');
const app=express();
app.use(bp.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');

mongoose.connect(process.env.link,{useNewUrlParser:true,useUnifiedTopology:true},function(err){
  if(!err){
    console.log(err);
  }
  else{
    console.log("mongodb connected");
  }
})

const schema=new mongoose.Schema({
  First:{
    type:String,

  },
  Last:String,
  Email:{
    type:String,
    unique:true
  },
  msg:String
})

const codetilllogn=mongoose.model('codetilllogns',schema)

app.get('/',function(req,res)
{
  res.render('index')
}
)
app.get('/',function(req,res)
{
  res.render('index')
}

)
app.get('/index',function(req,res)
{
  res.render('index')
}
)

app.get('/testimonials',function(req,res)
{
  res.render('testimonials')
}
)
app.get('/contact',function(req,res)
{
  res.render('contact')
}
)
app.get('/about',function(req,res)
{
  res.render('about')
}
)
app.get('/blog',function(req,res)
{
  res.render('blog')
}
)
app.get('/single',function(req,res)
{
  res.render('single')
}
)
app.get('/tutorial-single',function(req,res)
{
  res.render('tutorial-single')
}
)

app.post('/Contacts',function(req,res){

 const newmsg=new codetilllogn({
   First:req.body.First,
   Last:req.body.Last,
   Email:req.body.Email,
   msg:req.body.msg
 })
 newmsg.save(function(err){
   if(!err){
     console.log("saved");
   }
 });
})



app.listen('3000',function(err){
  if(!err){
    console.log("connected");
  }
});
