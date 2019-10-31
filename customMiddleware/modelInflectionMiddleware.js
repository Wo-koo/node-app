module.exports = modelInflection => {return async(req,res,next) =>{
    let modelName = require('inflection').classify(req.params.resource);
    res.model = require(`../models/${modelName}`);
    next();
}};

//es6 写法
// export default _modelInflection => {return async(req,res,next) =>{
//     let modelName = require('inflection').classify(req.params.resource);
//     res.model = require(`../models/${modelName}`);
//     next();
// }};