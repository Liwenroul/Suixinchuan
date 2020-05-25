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
var editMRouter = require('./routes/index');
var editURouter = require('./routes/index');

var listaRouter = require('./routes/index');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


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
app.use('/editM', editMRouter);
app.use('/editU', editURouter);
app.use('/lista', listaRouter);



//查找用户  httpS://localhost:8081/user
app.get('/user',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from user',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 
app.post('/user1',(req,res)=>{
  let data=req.body;
  console.log(data);
  let insertData = {
    userId:"u"+parseInt(Math.random()*1000000),
    userName:data.username,
    userTel:data.usertel,
    userPassword:data.userpwd,
    userAvatar:"",
    isloading:0
  }
  // con.query("select * from user",function(err,result){
  //   if(err){
  //     console.log(err);
  //   } else {
  //     console.log(result);
  //     if (result == []) {
        con.query('insert into user(userid,username,usertel,userpwd,userauatar,isloading) values(?,?,?,?,?,?)', [insertData.userId, insertData.userName, insertData.userTel, insertData.userPassword, insertData.userAvatar,insertData.isloading], function (err, result) {
          if (err) {
            console.log(err);
          }
          console.log(result);
          res.json(result);
        })
      // }
      // else {
      //   con.query('update user set isloading=? where userid=?', [data.isloading, data.userid], function (err, result) {
      //     if (err) {
      //       console.log(err);
      //     }
      //     console.log(result);
      //     res.json(result);
      //   })
      // }
    // }
  // })
})
app.post('/user2',(req,res)=>{
  let data=req.body;
  console.log(data);
  let upData = {
    isloading:data.isloading,
    userid:data.userid
  }
  con.query('update user set isloading=? where userid=?',[upData.isloading,upData.userid],function(err,result){
    if(err){
          console.log(err);
      }
        console.log(result);
        res.json(result); 
  })
})
//重置密码
app.post('/user3',(req,res)=>{
  let data=req.body;
  console.log(data);
  let upData = {
    userpwd:data.userpwd,
    userid:data.userid
  }
  con.query('update user set userpwd=? where userid=?',[upData.userpwd,upData.userid],function(err,result){
    if(err){
          console.log(err);
      }
        console.log(result);
        res.json(result); 
  })
})
app.post('/user',(req,res)=>{
  let data=req.body;
  console.log(data);
        con.query('insert into user(userid) values(?)',[data.userid],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
})

//穿搭  httpS://localhost:8081/wear
app.get('/wear',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from wear',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

app.post('/wear',(req,res)=>{
  let data=req.body;
  console.log(data);
        con.query('insert into wear(dynid) values(?)',[data.dynid],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
})


//查找商家  httpS://localhost:8081/allShop
app.get('/allShop',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from shop',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

app.post('/allShop',(req,res)=>{
  let data=req.body;
  console.log(data);
        con.query('insert into shop(shopid) values(?)',[data.shopid],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
})


//查找地址  httpS://localhost:8081/address
app.get('/address',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from address',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

app.post('/address',(req,res)=>{
  let data=req.body;
  console.log(data);
        con.query('insert into address(addressid) values(?)',[data.addressid],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
})

//尺码  httpS://localhost:8081/size
app.get('/size',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from size',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

app.post('/size',(req,res)=>{
  let data=req.body;
  console.log(data);
        con.query('insert into size(sizeid) values(?)',[data.sizeid],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
})



//收藏  httpS://localhost:8081/collect
app.get('/collect',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from collect',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

app.post('/collect',(req,res)=>{
  let data=req.body;
  console.log(data);
        con.query('insert into collect(cid) values(?)',[data.cid],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
})

//商品  httpS://localhost:8081/merchandise
app.get('/merchandise',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from merchandise',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

app.post('/merchandise',(req,res)=>{
  let data=req.body;
  console.log(data);
        con.query('insert into merchandise(merid) values(?)',[data.merid],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
})

//组借  httpS://localhost:8081/rentAll
app.get('/rentAll',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from rent',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

app.post('/rentAll',(req,res)=>{
  let data=req.body;
  console.log(data);
        con.query('insert into rent(rentid) values(?)',[data.rentid],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
})



//卖  httpS://localhost:8081/sale
app.get('/sale',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from sale',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

app.post('/sale',(req,res)=>{
  let data=req.body;
  console.log(data);
        con.query('insert into sale(saleid) values(?)',[data.saleid],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
})



//意见  httpS://localhost:8081/complain
app.get('/complain',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from complain',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

app.post('/complain',(req,res)=>{
  let data=req.body;
  console.log(data);
        con.query('insert into complain(compid) values(?)',[data.compid],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
})

app.get('/dynamic',function(err,res){
  con.query('select * from dynamic',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});
//管理员  httpS://localhost:8081/manager
app.get('/manager',function(err,res){
  con.query('select * from manager',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});
app.post('/manager',(req,res)=>{
  let data=req.body;
  console.log(data);
        con.query('insert into manager(mid) values(?)',[data.mid],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
})

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
        con.query('insert into denglu(userid) values(?)',[data.userid],function(err,result){
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
//选择默认地址
app.post('/chooseAdd',(req,res)=>{
  let data=req.body;
  console.log(data);
  con.query('update address set isdefault=? where addressid=?',[1,data.addressid],function(err,result){
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