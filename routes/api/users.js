// login and register
const express  = require("express");
const router = express.Router();
const User = require("../../models/User");
const jwt = require('jsonwebtoken');
const secretOrKey = require('../../config/keys').secretOrKey;
const passport = require('passport');

// route POST api/users/register
// @dec 返回token jwt passport
// @access public
router.post('/register',(req,res)=>{
    console.log(req.body);
    //查询数据库中是否有对应的邮箱
    User.findOne({email:req.body.email})
    .then(user=>{
        if(user){
            return res.status(400).json({email:"邮箱已经被注册"});
        }
        else{
            const newUser = new User({
                email:req.body.email,
                password:req.body.password
            })

            newUser.save()
            .then(User=>res.json(User))
            .catch(err=>console.log(err));          
        }
    })
    
});

// route POST api/users/login
// @dec 返回token jwt passport
// @access public
router.post('/client/login',(req,res)=>{
    console.log(req.body);
    //查询数据库中是否有对应的邮箱
    User.findOne({email:req.body.email})
    .then(user=>{
        if(user){
            console.log(`user's password ${user.password}`);
            console.log(`req.password is ${req.body.password}`);
            if(user.password == req.body.password){
                jwt.sign({id:user.id, email:user.email},secretOrKey,{expiresIn:3600},(err,token)=>{
                    if(err) throw err;
                    res.json({
                        success:true,
                        token:"Bearer " + token
                    })
                })
            }else{
                return res.status(400).json({password:"密码错误"});
            }
        }
        else{
            return res.status(404).json({email:"用户不存在"});
        }
    })
    
});

// route GET api/users/current
// @dec 返回 json
// @access private
router.get('/current',passport.authenticate('jwt',{session: false}),(req,res)=>{
    res.json({
        id:req.user.id,
        email:req.user.email,
    });
});

module.exports = router;