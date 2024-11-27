const express=require("express");
const router=express.Router();

const {
    addSchool,
    getSchools
}=require("../controllers/School");

// using controllers
router.post("/addSchool",addSchool);
router.get("/listSchools",getSchools);
module.exports=router;