const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema

const CategorySchema = new Schema({
    parentName:{
        type:String,
        required:false,
    },
    name:{
        type:String,
        required:true,
    }
})

module.exports = Category = mongoose.model("Category",CategorySchema);