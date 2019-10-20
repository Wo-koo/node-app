const express = require('express')
const router = express.Router();
const Category = require('../../models/Category')

router.post('/client/category/add',(req,res)=>{
    Category.findOne({parentName:req.body.parentName,name:req.body.name})
    .then(category=>{
        if(category){
            return res.status(400).json({parentName:req.body.parentName,name:req.body.name,msg:"相同类型已经被创建"})
        }else{
            let newCategory = new Category({
                parentName:req.body.parentName,
                name:req.body.name
            });

            newCategory.save()
            .then(()=>res.status(200).json({msg:"新建类型成功"}))
            .catch(err=>res.status(400).json({msg:err})); 
        }
    })
})

router.get('/client/category/list',async (req,res)=>{
    let categories = await Category.find().limit(100);
    res.json(categories);
});

router.get('/client/category/:id',async (req,res)=>{
    let category = await Category.findById(req.params.id);
    res.json(category);
});

module.exports = router; 