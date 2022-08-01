const express = require('express');
//调用router函数
const router = express.Router();
//创建约束及集合
const browsemodel = require('./mongoose/model/browsed');
const Sourcesmodel = require('./mongoose/model/Sources');
const ViewDesignmodel = require('./mongoose/model/ViewDesign');
const Componentmodel = require('./mongoose/model/Tools');
const usersmodel = require('./mongoose/model/users');
//在这里挂载对应的路由

//全局唯一密钥
const SECRET = 'asdfsaawr343d433532e';

//1.get请求
//首页返回 实用工具 数据
router.get('/gettools', (req, res) => {
  //通过req.query获取客户端传递的查询字符串发送到服务器的数据
  //响应处理结果
  Sourcesmodel.find({}, function (err, docs) {
    if (!err) {
      // console.log('工具列表查询成功');
      res.send({
        code: 200,
        msg: 'GET请求MongoDB成功！',
        data: [docs]
      });
    }
  });
});
router.get('/browsed', (req, res) => {
  browsemodel.findById('628469a1c3d71bba39b61060', function (err, doc) {
    console.log('浏览量加1');
    //每次查询数据库最新数据
    let browsed = doc.browsed;
    doc.updateOne({ $set: { browsed: browsed + 1 } }, function (err) {
      if (!err) {
        res.send({
          code: 200,
          browsed: browsed
        });
      }
    });
  });
});
router.get('/artbrowsed', (req, res) => {
  browsemodel.findById('628469a1c3d71bba39b61060', function (err, doc) {
    //每次查询数据库最新数据
    let artbrowsed = doc.artbrowsed;
    doc.updateOne({ $set: { artbrowsed: artbrowsed + 1 } }, function (err) {
      if (!err) {
        console.log('文章浏览量加一');
        res.send({
          code: 200,
          artbrowsed: artbrowsed
        });
      }
    });
  });
});
router.get('/getComponentCallerys', (req, res) => {
  //1.过滤方法实现按参数查询
  // var id = url.parse(req.url, true).query.id; //id表示接收的变量
  // //根据id不同 返回的数据不同——过滤
  // //filter方法用于过滤数组成员 满足条件的成员组成一个新的数组返回
  // res.send(list.filter(function(item) {
  //     return (item && item.id == id);
  // }));
  Componentmodel.find({}, function (err, docs) {
    if (!err) {
      res.send({
        code: 200,
        msg: 'GET请求MongoDB成功！',
        data: [docs]
      });
    }
  });
});
router.get('/getViewDesign', (req, res) => {
  //通过req.query获取客户端传递的查询字符串发送到服务器的数据
  //响应处理结果
  ViewDesignmodel.find({}, function (err, docs) {
    if (!err) {
      // console.log('查询成功');
      res.send({
        code: 200,
        msg: 'GET请求MongoDB成功！',
        data: [docs]
      });
    }
  });
});

//2.post请求
router.post('/ChangeLiked', (req, res) => {
  let _id = req.query._id;
  let id = req.query.id;
  //通过请求体
  console.log(req.query);
  if (id >= 1 && id <= 13) {
    Sourcesmodel.findById(_id, function (err, doc) {
      let likes = doc.liked;
      if (!err) {
        //点赞加1操作
        doc.updateOne({ $set: { liked: likes + 1 } }, function () {
          console.log('修改成功');
        });
      }
    });
  } else if (id >= 12 && id <= 23) {
    Componentmodel.findById(_id, function (err, doc) {
      let likes = doc.liked;
      if (!err) {
        //点赞加1操作
        doc.updateOne({ $set: { liked: likes + 1 } }, function () {
          console.log('修改成功');
        });
      }
    });
  } else {
    ViewDesignmodel.findById(_id, function (err, doc) {
      let likes = doc.liked;
      if (!err) {
        //点赞加1操作
        doc.updateOne({ $set: { liked: likes + 1 } }, function () {
          console.log('修改成功');
        });
      }
    });
  }

  res.send({
    code: 200,
    msg: 'POST请求成功!'
  });
});
//注册用户接口
router.post('/regist', async (req, res) => {
  console.log(req.body);
  let username = req.body.username;
  let passwd = req.body.passwd;
  const user = await usersmodel.findOne({ UserName: username });
  if (!user) {
    usersmodel.create(
      {
        UserName: username,
        Passwd: passwd
      },
      function () {
        console.log('新建用户成功');
      }
    );
    //返回状态码，用于前端分类
    return res.send({
      code: 200,
      msg: '新建用户成功'
    });
  } else {
    return res.send({
      code: 201,
      msg: '该用户已注册'
    });
  }
});
//用户登录接口
router.post('/login', async (req, res) => {
  let username = req.body.username;
  let passwd = req.body.passwd;
  let token = '';
  let ID = '';
  let role = '';
  const user = await usersmodel.findOne({ UserName: username });
  console.log(user);
  if (!user) {
    //返回状态码，用于前端分类
    return res.status(201).send({
      code: 201,
      msg: '该用户未注册！'
    });
  } else {
    //用户存在 则插件对应方法判断 明文密码与数据库密文是否对应
    const isPasswdValid = require('bcryptjs').compareSync(passwd, user.Passwd);
    if (!isPasswdValid) {
      return res.status(202).send({
        code: 422,
        msg: '密码错误'
      });
    }
    const jwt = require('jsonwebtoken');
    //根据_id生成token
    const Token = jwt.sign(
      {
        id: String(user._id)
      },
      SECRET
    );
    token = Token;
    ID = user._id;
    role = user.Role;

    //用户存在且密码匹配成功返回token
    res.send({
      code: 200,
      msg: 'post请求成功',
      token,
      ID,
      role: [role] || []
    });
  }
});
//新增数据接口
router.post('/additem', (req, res) => {
  console.log(req.body);
  let id1 = req.body.id;
  let url = req.body.URL;
  let faviconurl = req.body.faviconUrl;
  let sourcename = req.body.sourceName;
  let title = req.body.title;
  if (id1 >= 1 && id1 <= 20) {
    Sourcesmodel.create({ id: id1, URL: url, faviconUrl: faviconurl, sourceName: sourcename, title: title, liked: 0 }, function (err) {
      if (!err) {
        console.log('新增数据成功');
        res.send({
          code: 200,
          msg: '新增数据成功'
        });
      } else {
        res.send({
          msg: '新增失败',
          code: 202
        });
      }
    });
  } else if (id1 > 20 && id1 <= 40) {
    console.log(id1);
    Componentmodel.create({ id: id1, URL: url, faviconUrl: faviconurl, sourceName: sourcename, title: title, liked: 0 }, function (err) {
      if (!err) {
        console.log('新增数据成功');
        res.send({
          code: 200,
          msg: '新增数据成功'
        });
      } else {
        res.send({
          msg: '新增失败',
          code: 202
        });
      }
    });
  } else {
    ViewDesignmodel.create({ id: id1, URL: url, faviconUrl: faviconurl, sourceName: sourcename, title: title, liked: 0 }, function (err) {
      console.log('新增数据成功');
      if (!err) {
        res.send({
          code: 200,
          msg: '新增数据成功'
        });
      }else{
        res.send({
          msg:'新增失败',
          code:202
        })
      }
    });
  }
});

//删除数据接口
router.post('/removeitem', (req, res) => {
  console.log(req.query);
  let delid = req.query.delid;
  let id2=req.query.id
  if(id2>=1&&id2<=20){
    Sourcesmodel.deleteOne({ _id: delid }, function (err) {
      if(!err){
          console.log('删除成功');
          res.send({
            code: 200,
            msg: '新增数据成功'
          });
      }
  
    })
    }else if(id2>20&&id2<=40){
       Componentmodel.deleteOne({ _id: delid }, function (err) {
        if(!err){
          console.log('删除成功');
          res.send({
            code: 200,
            msg: '新增数据成功'
          });
      }
      })
    }else{
      ViewDesignmodel.deleteOne({ _id: delid }, function (err) {
        if(!err){
          console.log('删除成功');
          res.send({
            code: 200,
            msg: '新增数据成功'
          });
      }
        })
    }
});


//向外暴露提供使用
module.exports = router;
