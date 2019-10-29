const express = require('express')
const router = express.Router();
const Equipment = require('../../models/Equipment')

router.post('/client/equipment/add',(req,res)=>{
    Equipment.findOne({name:req.body.name})
    .then(equipment=>{
        if(equipment){
            return res.status(400).json({pname:req.body.name,msg:"相同名称的装备已经被创建"})
        }else{
            let newEquipment = new Equipment({
                name:req.body.name,
                orginalImgName:req.body.orginalImgName,
            });

            newEquipment.save()
            .then(()=>res.status(200).json({msg:"新建装备成功"}))
            .catch(err=>res.status(400).json({msg:err})); 
        }
    })
})

router.get('/client/equipment/list',async (req,res)=>{
    let equipments = await Equipment.find().limit(100);
    res.json(equipments);
});

router.get('/client/equipment/:id',async (req,res)=>{
    let equipment = await Equipment.findById(req.params.id);
    res.json(equipment);
});

router.delete('/client/equipment/:id',async (req,res)=>{
    await Equipment.findByIdAndDelete(req.params.id);
    res.status(200).json({msg:"删除成功"});
});

module.exports = router; 