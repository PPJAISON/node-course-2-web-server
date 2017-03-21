const express = require('express');
const hbs = require('hbs')
var app = express();

const port = process.env.port||3101

app.get('/',(req,res)=>{
  res.send({
    name:'Jaison',
    likes:[
      'driving','dancing'
    ]
  })
});
hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs')

app.use((req,res,nex)=>{
  var now = new Date().toString();
  console.log(`${now}:  ${req.method} ${req.url}`);

  nex();
});

// app.use((req,res,next)=>{
//   console.log(`Calling Maintain`);
//   res.render('maintain.hbs',{
//   pageTitle:'Maintain Mode'
//   })
// });
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(tasxt)=>{
  return tasxt.toUpperCase();
});


app.get('/about',(req,res)=>{
  //res.send('About page')
  res.render('about.hbs',{
    pageTitle:'About this page'
    //currentYear:new Date().getFullYear()
  })
})
app.get('/welcome',(req,res)=>{
  res.render('welcome.hbs',{
    pageTitle:'Welcome to Mustache',
    UserName:'Jaison Pappachan',
    welcomeMessage:'Poda Patti',
    //currentYear:new Date().getFullYear(),
    pageCount:200
  })
})
app.get('/bad',(req,res)=>{
  res.send({
    error:'Error Handling'
  })
})
app.listen(port,()=>{
  console.log('Server is up on 3101 . or env variable')
});


//
// var express = require('express')
// var app = express()
//
// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })
//
// app.listen(3100, function () {
//   console.log('Example app listening on port 3000!')
// })
