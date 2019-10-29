const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema

const EquipmentSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    orginalImgName:{
        type:String,
        required:true,
    },
})

module.exports = Equipment = mongoose.model("Equipment",EquipmentSchema);