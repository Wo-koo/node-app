const express = require('express')
const router = express.Router();
const Hero = require('../../models/Hero')

router.post('/client/equipment/add',(req,res)=>{
    Hero.findOne({name:req.body.name})
    .then(equipment=>{
        if(equipment){
            return res.status(400).json({pname:req.body.name,msg:"相同的英雄已经被创建"})
        }else{
            let newEquipment = new Hero({
                name:req.body.name,
                orginalImgName:req.body.orginalImgName,
            });

            newEquipment.save()
            .then(()=>res.status(200).json({msg:"新建英雄成功"}))
            .catch(err=>res.status(400).json({msg:err})); 
        }
    })
})

router.get('/client/equipment/list',async (req,res)=>{
    let equipments = await Hero.find().limit(100);
    res.json(equipments);
});

router.get('/client/equipment/:id',async (req,res)=>{
    let equipment = await Hero.findById(req.params.id);
    res.json(equipment);
});

router.delete('/client/equipment/:id',async (req,res)=>{
    await Hero.findByIdAndDelete(req.params.id);
    res.status(200).json({msg:"英雄删除成功"});
});

module.exports = router; 