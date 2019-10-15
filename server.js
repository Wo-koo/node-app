//express 优秀，简洁的js服务器
const express = require("express");//导出express实例
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('passport');
const history = require('connect-history-api-fallback');

const app = express();
const users = require("./routes/api/users");
const categories = require('./routes/api/categories');
app.use(history());

//db config
const db = require("./config/keys").mongoURI;

//connect to mongodb 网络不稳定，建议搭建本地的mongobd
mongoose.connect(db)
.then(()=>{console.log("connected to mongodb")})
.catch(err=>console.log(err));

// 将express与vue-crl生成的文件进行配合使用
console.log(__dirname);//__dirname是获取当前路径
app.use('/',express.static(path.join(__dirname,'/client/dist/')));

// 使用body-parser的中间件
app.use(bodyParser.urlencoded({extended:false}))//这个地方有点搞不懂，为什么要设置extended:false;
app.use(bodyParser.json());

// init passport 
app.use(passport.initialize());
require('./config/passport')(passport);//？？这个地方不是很理解，为什么这里也要用require

//设置路由，否则浏览器无法访问，因为浏览器找不到入口
app.get('/',(req,res)=>{
    res.send("Holle idoit");
});

app.use(users);
app.use(categories);

const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log(`express server running on port ${port}`);//反引号，字符串模版
})
