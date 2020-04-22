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
  console.log('a')
  console.log(mid);
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
// // 注册管理（添加管理员）
router.get('/zhuce', function(req, res, next) {
  res.render('zhuceM', {List:List});
});
// // 添加管理员
router.post('/add',function(req,res,next){
  var mName=req.body.user;
  var mRealName= req.body.username;
  var mPwd=req.body.pwd;
  var mSex=req.body.mSex;
  var mTel=req.body.mTel;
  var mEmail=req.body.mEmail;
  con.query("insert into manager(mid,mname,mrealname,msex,mtel,memail,mpwd) values(?,?,?,?,?,?,?)",[parseInt((Math.random()*1000)),mName,mRealName,mSex,mTel,mEmail,mPwd],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      res.redirect("/system");
    }
  });
});
// // 删除管理员
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
// // 查询管理员
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
      res.render('system',{editMList:result});
    }
  })
});

// 用户管理
router.get('/userguanli', function(req, res, next) {
  con.query("select * from user",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("userGuanli",{userinfo:result});
      // console.log(result);
    }
  });
});
// 编辑用户
router.get('/editU', function(req, res, next) {
  var userId=req.query.userid;
  con.query("select * from user where userid=?",[userId],function(err,result){
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
  var userId=req.query.userid;
  var userName= req.body.username;
  var userPassword=req.body.pwd;
  var userTel=req.body.tel;
  var userMon=req.body.mon;
  con.query("update user set username=?,usertel=?,userpwd=?,userMon=? where userid=?",[userName,userTel,userPassword,userMon,userId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.redirect("/userguanli");
    }
  })
})
// 删除用户
router.get('/delu',function(req,res,next){
  var userId=req.query.userid;
  con.query("SET FOREIGN_KEY_CHECKS=0")
  con.query("delete from user where userid=?",[userId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    res.redirect("/userguanli");
    }
  });
});
//查询用户
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
      res.render('userGuanli',{editUList:result});
    }
  })
});

// // 商家管理
router.get('/shop', function(req, res, next) {
  con.query("select * from shop",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("shopM"
      ,{shop:result}
      );
      console.log(result);
    }
  });
});
// 编辑商家
router.get('/editS', function(req, res, next) {
  var shopId=req.query.shopid;
  con.query("select * from shop where shopid=?",[shopId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      res.render('editS',{editSList:result});
    }
  })
});
router.post('/editShop',function(req,res,next){
  var shopId=req.query.shopid;
  var shopName= req.body.shopname;
  var shopPassword=req.body.pwd;
  var shopTel=req.body.tel;
  con.query("update shop set shopname=?,shoptel=?,shoppwd=? where shopid=?",[shopName,shopTel,shopPassword,shopId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.redirect("/shop");
    }
  })
})
// 删除商家
router.get('/dels',function(req,res,next){
  var shopId=req.query.shopid;
  con.query("SET FOREIGN_KEY_CHECKS=0")
  con.query("delete from shop where shopid=?",[shopId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    res.redirect("/shop");
    }
  });
});
//查询商家
router.post('/this_shop',function(req,res,next){
  console.log(req.body);
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
  var selectSQL = "select * from shop where shopid=?";
  console.log(selectSQL);
  con.query(selectSQL,search_result,function(err,result){
    console.log(result);
    if(err){
      console.log(err);
    }
    else{
      res.render('shopM',{editSList:result});
    }
  })
});

// // 商品管理
router.get('/goods', function(req, res, next) {
  con.query("select * from merchandise",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("goodsM"
      ,{goods:result}
      );
      console.log(result);
    }
  });
});
// 编辑商品
router.get('/editG', function(req, res, next) {
  var merId=req.query.merid;
  con.query("select * from merchandise where merid=?",[merId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      res.render('editG',{editGList:result});
    }
  })
});
router.post('/editGoods',function(req,res,next){
  var merid=req.query.merid;
  var shopid= req.body.shopid;
  var saleid=req.body.saleid;
  var tit=req.body.tit;
  var mermon= req.body.mermon;
  var price=req.body.price;
  var shopbrand=req.body.shopbrand;
  var mercolor= req.body.mercolor;
  var mernum=req.body.mernum;
  con.query("update merchandise set shopid=?,saleid=?,tit=?,mermon=?,price=?,shopbrand=?,mercolor=?,mernum=? where merid=?",[shopid,saleid,tit,mermon,price,shopbrand,mercolor,mernum,merid],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.redirect("/goods");
    }
  })
})
// 删除商品
router.get('/delg',function(req,res,next){
  var merId=req.query.merid;
  con.query("SET FOREIGN_KEY_CHECKS=0")
  con.query("delete from merchandise where merid=?",[merId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    res.redirect("/goods");
    }
  });
});
//查询商品
router.post('/this_goods',function(req,res,next){
  console.log(req.body);
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
  var selectSQL = "select * from merchandise where merid=?";
  console.log(selectSQL);
  con.query(selectSQL,search_result,function(err,result){
    console.log(result);
    if(err){
      console.log(err);
    }
    else{
      res.render('goodsM',{editGList:result});
    }
  })
});


// 动态管理
router.get('/dongtai', function(req, res, next) {
  con.query("select * from wear",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("dongtaiM",{dynamic:result});
      // console.log(result);
    }
  });
});
// 编辑动态
router.get('/editD', function(req, res, next) {
  var dynid=req.query.dynid;
  con.query("select * from wear where dynid=?",[dynid],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      res.render('editD',{editDList:result});
    }
  })
});
router.post('/editDynamic',function(req,res,next){
  var dynid=req.query.dynid;
  var dynContent=req.body.dynContent;
  var dynImg= req.body.img;
  var likenum=req.body.likenum;
  con.query("update wear set dynContent=?,dynImg=?,likenum=? where dynid=?",[dynContent,dynImg,likenum,dynid],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.redirect("/dongtai");
    }
  })
})
// 删除动态
router.get('/deld',function(req,res,next){
  var dynId=req.query.dynid;
  con.query("SET FOREIGN_KEY_CHECKS=0")
  con.query("delete from wear where dynid=?",[dynId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      res.redirect("/dongtai");
    }
  });
});
//查找动态
router.post('/this_dongtai',function(req,res,next){
var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
console.log(search_result);
  var selectSQL = "select * from wear where dynid=?";
  console.log(selectSQL);
  con.query(selectSQL,search_result,function(err,result){
    console.log(result);
    if(err){
      console.log(err);
    }
    else{
      res.render("dongtaiM",{dynamic:result});
    }
  })
})


// // 租借管理
router.get('/rent', function(req, res, next) {
  con.query("select * from rent",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("rentM"
      ,{rent:result}
      );
      console.log(result);
    }
  });
});
// 编辑租借
router.get('/editR', function(req, res, next) {
  var rentid=req.query.rentid;
  con.query("select * from rent where rentid=?",[rentid],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      res.render('editR',{editRList:result});
    }
  })
});
router.post('/editRent',function(req,res,next){
  var rentid=req.query.rentid;
  var userid=req.body.userid;
  var merid= req.body.merid;
  var renttim=req.body.renttim;
  var isback= req.body.isback;
  var isevaluate=req.body.isevaluate;
  con.query("update rent set userid=?,merid=?,renttim=?,isback=?,isevaluate=? where rentid=?",[userid,merid,renttim,isback,isevaluate,rentid],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.redirect("/rent");
    }
  })
})
// 删除租借
router.get('/delr',function(req,res,next){
  var rentid=req.query.rentid;
  con.query("SET FOREIGN_KEY_CHECKS=0")
  con.query("delete from rent where rentid=?",[rentid],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      res.redirect("/rent");
    }
  });
});
//查找租借
router.post('/this_rent',function(req,res,next){
var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
console.log(search_result);
  var selectSQL = "select * from rent where rentid=?";
  console.log(selectSQL);
  con.query(selectSQL,search_result,function(err,result){
    console.log(result);
    if(err){
      console.log(err);
    }
    else{
      res.render("rentM",{rent:result});
    }
  })
})



// //编辑


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





//表中表
//地址表（用户管理）
router.get('/lista', function(req, res, next) {
  var userId=req.query.userId;
  console.log(userId)
  con.query("select * from address where userid=?",[userId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result)
      res.render("lista",{address:result});
      // console.log(result);
    }
  });
});
//尺码表（商品管理）
router.get('/lists', function(req, res, next) {
  var merId=req.query.merId;
  console.log(merId)
  con.query("select * from size where merid=?",[merId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result)
      res.render("lists",{size:result});
      // console.log(result);
    }
  });
});


// // /* POST 登录验证 && GET login page. */
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
