const express = require('express')
const router = express.Router();
const Hero = require('../../models/Hero')
const modelInflectionMiddleware = require("./../../customMiddleware/modelInflectionMiddleware");

//传入自定义的model反射中间件,这个部分的原理可以参考Express自定义中间件的相关知识
router.use("/client/:resource",modelInflectionMiddleware());

router.post('/client/hero/add',(req,res)=>{
    req.model.findOne({name:req.body.name})
    .then(hero=>{
        if(hero){
            return res.status(400).json({name:req.body.name,msg:"相同的英雄已经被创建"})
        }else{
            // let hero = new Hero({...req.model});
            // console.log(`hero = ${hero}`);
            req.model.save()
            .then(()=>res.status(200).json({msg:"新建英雄成功"}))
            .catch(err=>res.status(400).json({msg:err})); 
        }
    })
})

router.get('/client/hero/list',async (req,res)=>{
    let heros = await Hero.find().limit(100);
    res.json(heros);
});

router.get('/client/hero/:id',async (req,res)=>{
    let hero = await Hero.findById(req.params.id);
    res.json(hero);
});

router.delete('/client/hero/:id',async (req,res)=>{
    await Hero.findByIdAndDelete(req.params.id);
    res.status(200).json({msg:"英雄删除成功"});
});

module.exports = router; 