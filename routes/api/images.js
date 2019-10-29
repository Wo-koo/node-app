const express = require('express')
const router = express.Router();
const path = require('path');

router.get('/client/images/:orginalImgName',async (req,res)=>{
    //通过下面的方式，我们可以根据定义的路由返回图片
    res.sendFile(req.params.orginalImgName,{ root:path.join(__dirname + "/../../imgSrc") });//这里不可以使用相对路径，存在安全风险
});

module.exports = router; 