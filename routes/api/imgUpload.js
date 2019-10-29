const express = require('express')
const router = express.Router();
const multer = require('multer');
// const storage = multer.diskStorage({
//     dest:__dirname + "/../../imgSrc",
//     filename:function(req,file){
//         switch (file.mimetype) {
//             case "image/jpeg":
//                 file.filename = file.filename + ".jpg";
//                 break;       
//             default:
//                 break;
//         }
//     }
// }) ;  

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + "/../../imgSrc")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });

const upload = multer({ storage:storage})

router.post('/client/imgupload',upload.single("file"),(req,res)=>{
    let file = req.file;
    console.log("file = " + file.filename);
    res.send(file);
})

module.exports = router; 