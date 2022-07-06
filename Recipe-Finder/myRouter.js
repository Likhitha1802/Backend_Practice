const express = require('express');
const router = express.Router();
var datacollection = require("./datacollection");
var indexpath = __dirname+'pages/main.html';
router.get('/',function(req,res){
    res.sendFile(indexpath)
});
router.post("/postingdata",function(req,res){
    var checkdata = datacollection.find(checkAge);
    function checkAge(recipe) {
        if(recipe.Name == req.body.name){
            return recipe
        }
        else{
            console.log("not found")
        }
      }
    if(checkdata != undefined){
        res.send(checkdata)
    }
    else{
        res.sendStatus(500)
    }
})
module.exports = router;