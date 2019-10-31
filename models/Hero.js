const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema

const HeroSchema = new Schema({
    //名称
    name:{
        type:String,
        required:true,
    },
    //昵称  
    nickName:{
        type:String,
        required:true,
    },
    //英雄类型
    heroTypes:{
        type:Array,
        required:true,
    },
    //难度水品
    difficultyLevel:{
        type:Number,
        required:true,
    },
    //技能水品
    skillLevel:{
        type:Number,
        required:true,
    },
    //攻击水平
    atackLevel:{
        type:Number,
        required:true,
    },
    //生存水平
    survivalLevel:{
        type:Number,
        required:true,
    },
    //技能表
    skills:[
        {
            icon:{type:String},//技能图标
            skillName:{type:String},//技能名称
            skillDelay:{type:String},//技能延迟
            skillCost:{type:String},//技能消耗
            skillDescription:{type:String},//技能描述
            skillTips:{type:String},//技能建议
        }
    ],
    //顺风出装 or 优势出装
    advantageEquipments:{
        equipmentIcons:[
            {
                equipmentIcon:{type:String},
                equipmentName:{type:String}
            }
        ],
        equipmentTips:{
            type:String,
        }
    },
    //逆风出装 or 劣势出装
    disadvantageEquipments:{
        equipmentIcons:[
            {
                equipmentIcon:{type:String},
                equipmentName:{type:String}
            }
        ],
        equipmentTips:{
            type:String,
        }
    },
    //
})

module.exports = Hero = mongoose.model("Hero",HeroSchema);