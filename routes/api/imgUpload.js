const express = require('express')
const router = express.Router();
const multer = require('multer');   
const upload = multer({
    dest:__dirname + "../../imgSrc",
})

router.post('/client/imgupload',upload.single("file"),(req,res)=>{
    let file = req.file;
    res.send(file);
})

module.exports = router; 