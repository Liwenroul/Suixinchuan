var express = require('express');
var router = express.Router();
var data=require('../data.json');var List=data.chapterList;
var mysql=require('mysql');
var dbconfig = require('../config/dbconfig.json');
var bodyParser=require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var con = mysql.createConnection(dbconfig);
con.connect();
router.get('/', function(req, res, next) {
  res.render('login', { title:'随心穿后台管理系统' });
});
// 系统管理
router.get('/system', function(req, res, next) {
    con.query("select * from manager",function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.render("system",{manager:result});
        // console.log(result);
      }
    });
});
// 编辑管理员
router.get('/editM', function(req, res, next) {
  var mid=req.query.mid;
  con.query("select * from manager where mid=?",[mid],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      res.render("editM",{editMList:result});
    }
  })
});
router.post('/editManager',function(req,res,next){
  var mid=req.query.mid;
  console.log(mid);
  var mname=req.body.user;
  var mrealname= req.body.username;
  var mpwd=req.body.pwd;
  var msex=req.body.msex;
  var mtel=req.body.mtel;
  var memail=req.body.memail;
  con.query("update manager set mname=?,mrealname=?,msex=?,mtel=?,memail=?,mpwd=? where mid=?",[mname,mrealname,msex,mtel,memail,mpwd,mid],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.redirect("/system");
    }
  })
})

// 用户管理
router.get('/userguanli', function(req, res, next) {
  con.query("select * from user",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("userGuanli",{user:result});
      // console.log(result);
    }
  });
});
// 编辑用户
router.get('/editU', function(req, res, next) {
  var userid=req.query.userid;
  con.query("select * from user where userid=?",[userid],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      res.render('editU',{editUList:result});
    }
  })
});
router.post('/editUser',function(req,res,next){
  var userid=req.query.userid;
  var username= req.body.username;
  var userpwd=req.body.pwd;
  var usertel=req.body.tel;
  con.query("update user set username=?,usertel=?,userpwd=? where userid=?",[username,usertel,userpwd,userid],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.redirect("/userguanli");
    }
  })
})

// 动态管理
// router.get('/dongtai', function(req, res, next) {
//   con.query("select * from dynamic",function(err,result){
//     if(err){
//       console.log(err);
//     }
//     else{
//       res.render("dongtaiM",{dynamic:result});
//       // console.log(result);
//     }
//   });
// });
// router.post('/dongtai',function(req,res,next){
// var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
// console.log(search_result);
//   var selectSQL = "select * from dynamic where dynamicId=?";
//   console.log(selectSQL);
//   con.query(selectSQL,search_result,function(err,result){
//     console.log(result);
//     if(err){
//       console.log(err);
//     }
//     else{
//       res.render("dongtaiM",{dynamic:result});
//     }
//   })
// })
// // 编辑动态
// router.get('/editD', function(req, res, next) {
//   var dynamicId=req.query.dynamicId;
//   con.query("select * from dynamic where dynamicId=?",[dynamicId],function(err,result){
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log(result);
//       res.render('editD',{editDList:result});
//     }
//   })
// });
// router.post('/editDynamic',function(req,res,next){
//   var dynamicId=req.query.dynamicId;
//   var dynamicContent=req.body.content;
//   var dynamicImg= req.body.img;
//   var likeNum=req.body.num;
 
//   con.query("update dynamic set dynamicContent=?,dynamicImg=?,likeNum=? where dynamicId=?",[dynamicContent,dynamicImg,likeNum,dynamicId],function(err,result){
//     if(err){
//       console.log(err);
//     }
//     else{
//       res.redirect("/dongtai");
//     }
//   })
// })

// // 商家管理
// router.get('/shop', function(req, res, next) {
//   // con.query("select * from dynamic",function(err,result){
//     // if(err){
//     //   console.log(err);
//     // }
//     // else{
//       res.render("shopM"
//       // ,{dynamic:result}
//       );
//       // console.log(result);
//     // }
//   // });
// });

// // 商品管理
// router.get('/goods', function(req, res, next) {
//   res.render("goodsM");
// });

// // 租借管理
// router.get('/rent', function(req, res, next) {
//   res.render("rentM");
// });

// 注册管理（添加管理员）
router.get('/zhuce', function(req, res, next) {
res.render('zhuceM', {List:List});
});

//编辑

// 添加管理员
router.post('/add',function(req,res,next){
    var mname=req.body.user;
    var mrealname= req.body.username;
    var mpwd=req.body.pwd;
    var msex=req.body.msex;
    var mtel=req.body.mtel;
    var memail=req.body.memail;
    con.query("insert into manager(mid,mname,mrealname,msex,mtel,memail,mpwd) values(?,?,?,?,?,?,?)",[parseInt((Math.random()*1000)),mname,mrealname,msex,mtel,memail,mpwd],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.redirect("/system");
      }
    });
  });
// 删除管理员
  router.get('/del',function(req,res,next){
      var mid=req.query.mid;
      con.query("delete from manager where mid=?",[mid],function(err,result){
        if(err){
          console.log(err);
        }
        else{
          console.log(result);
        res.redirect("/system");
        }
      });
    });
// // 删除动态  
//     router.get('/deld',function(req,res,next){
//       var dynamicId=req.query.dynamicId;
//       con.query("delete from dynamic where dynamicId=?",[dynamicId],function(err,result){
//         if(err){
//           console.log(err);
//         }
//         else{
//           console.log(result);
//         res.redirect("/dongtai");
//         }
//       });
//     });
// 删除用户
    router.get('/delu',function(req,res,next){
      var userid=req.query.userid;
      con.query("SET FOREIGN_KEY_CHECKS=0")
      con.query("delete from user where userid=?",[userid],function(err,result){
        if(err){
          console.log(err);
        }
        else{
          console.log(result);
        res.redirect("/userguanli");
        }
      });
    });

// 查询用户
router.post('/this_user',function(req,res,next){
  console.log(req.body);
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
  var selectSQL = "select * from user where userid=?";
  console.log(selectSQL);
  con.query(selectSQL,search_result,function(err,result){
    console.log(result);
    if(err){
      console.log(err);
    }
    else{
      res.render("userGuanli",{user:result});
    }
  })
});
// 查询管理员
router.post('/this_system',function(req,res,next){
  console.log(req.body);
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
  var selectSQL = "select * from manager where mid=?";
  console.log(selectSQL);
  con.query(selectSQL,search_result,function(err,result){
    console.log(result);
    if(err){
      console.log(err);
    }
    else{
      res.render('editM',{editMList:result});
    }
  })
});

// // 表中表
// router.get('/listt', function(req, res, next) {
//   res.render('listt', {title:'吾宠后台管理系统'});
//   // res.render('list', {List:List});
// });
// router.get('/listp', function(req, res, next) {
//   var userId=req.query.userId;
//   con.query("select * from petinfo where userId=?",[userId],function(err,result){
//     if(err){
//       console.log(err);
//     }
//     else{
//       res.render("listp",{petinfo:result});
//       // console.log(result);
//     }
//   });
// });
// router.get('/listb', function(req, res, next) {
//   var activeId=req.query.activeId;
//   con.query("select * from signup where activeId=?",[activeId],function(err,result){
//     if(err){
//       console.log(err);
//     }
//     else{
//       res.render("listb",{signup:result});
//       // console.log(result);
//     }
//   });
// });
// router.get('/listd', function(req, res, next) {
//   var userId=req.query.userId
//   con.query("select * from clockin where userId=?",[userId],function(err,result){
//     if(err){
//       console.log(err);
//     }
//     else{
//       res.render("listd",{clockin:result});
//       // console.log(result);
//     }
//   });
// });

// /* POST 登录验证 && GET login page. */
router.get('/login', function(req, res, next) {
  var response = {
    "username":req.query.username,
    "pwd":req.query.pwd,
};
var selectSQL = "select mrealname,mpwd from manager where mrealname = '"+req.query.username+"' and mpwd = '"+req.query.pwd+"'";
   
  con.query(selectSQL,function(err,result){
    if(err){
      console.log(err);
    }
    else if(result==''){
      res.json({ret_code : 1, ret_msg : '用户名密码错误'});// 若登录失败
    }
    else{
        res.redirect('/system');
      
    }
  });
});

module.exports = router;
