const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema

const SkillSchema = new Schema({
    icon: {
        type: String
    }, //技能图标
    skillName: {
        type: String
    }, //技能名称
    skillDelay: {
        type: String
    }, //技能延迟
    skillCost: {
        type: String
    }, //技能消耗
    skillDescription: {
        type: String
    }, //技能描述
    skillTips: {
        type: String
    }, //技能建议
})

module.exports = Skill = mongoose.model("Skill", SkillSchema);