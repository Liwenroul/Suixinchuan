var express = require('express');
var router = express.Router();
var data=require('./data.json');
var List=data.chapterList;
var mysql=require('mysql');
var dbconfig = require('./config/dbconfig.json');
var con = mysql.createConnection(dbconfig);
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
con.connect();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var listRouter = require('./routes/list');
// var listtRouter = require('./routes/list');
// var listpRouter = require('./routes/index');
// var listbRouter = require('./routes/index');
// var listdRouter = require('./routes/index');
// var listeRouter = require('./routes/index');
// var dongtaiRouter = require('./routes/index');
// var zhuceRouter = require('./routes/index');
// var showPlayRouter = require('./routes/index');
var editMRouter = require('./routes/index');
// var editDRouter = require('./routes/index');
// var editARouter = require('./routes/index');
// var editURouter = require('./routes/index');
// var activityRouter = require('./routes/index');
// var systemRouter = require('./routes/index');
// var userguanRouter = require('./routes/index');
// var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listRouter = require('./routes/list');

var systemRouter = require('./routes/index');
var userguanRouter = require('./routes/index');
var shopRouter = require('./routes/index');
var goodsRouter = require('./routes/index');
var dongtaiRouter = require('./routes/index');
var rentRouter = require('./routes/index');
var zhuceRouter = require('./routes/index');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/list', listRouter);
// app.use('/listt', listtRouter);
// app.use('/listp', listpRouter);
// app.use('/listb', listbRouter);
// app.use('/listd', listdRouter);
// app.use('/liste', listeRouter);
// app.use('/zhuce', zhuceRouter);
// app.use('/showPlay',showPlayRouter);
app.use('/editM', editMRouter);
// app.use('/editD', editDRouter);
// app.use('/editA', editARouter);
// app.use('/editU', editURouter);
// app.use('/activity', activityRouter);
// app.use('/dongtai', dongtaiRouter);
// app.use('/system', systemRouter);

// app.use('/userguanli', userguanRouter);
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/list', listRouter);
app.use('/system', systemRouter);
app.use('/userguanli', userguanRouter);
app.use('/shop', shopRouter);
app.use('/goods', goodsRouter);
app.use('/dongtai', dongtaiRouter);
app.use('/rent', rentRouter);
app.use('/zhuce', zhuceRouter);

app.get('/dynamic',function(err,res){
  con.query('select * from dynamic',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('/manager',function(err,res){
  con.query('select * from manager',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('/userinfo',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from user',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
          
      }
      console.log(typeof(result));
      res.json(result); 

  }); 
}) 

app.get('/denglu',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from denglu',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

app.post('/denglu',(req,res)=>{
  let data=req.body;
  console.log(data);
        con.query('insert into denglu(userId) values(?)',[data.userId],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
})
app.post('/delguanzhu',(req,res)=>{
  let data=req.body;
  console.log(data);
  let insertData = {
    Id:data.Id,
    guanzhuId:data.guanzhuId,
    userId:data.userId,
    
  }
  con.query('delete from guanzhu where Id=?',[insertData.Id],function(err,result){
    if(err){
          console.log(err);
      }
        console.log(result);
        res.json(result); 
  })
})







// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var server = app.listen(8082, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("地址为 http://%s:%s", host, port);
})

module.exports = app;