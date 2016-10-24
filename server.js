var express =  require('express')
var app =  express();
const port = process.env.PORT || 300;
app.use(function(req,res,next){
  if (req.header['x-forwarded-proto'] === 'https'){
    res.redirect('http://'+req.hostname+req.url)

  }
  else{
    next()

  }
})
app.use(express.static('public'))
app.listen(port,function () {
  console.log('up and running on port: ' + port);
})
