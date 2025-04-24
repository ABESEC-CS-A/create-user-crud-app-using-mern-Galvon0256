const express=require("express");
const usercontroller=require("../controller/userConroller.js");
const router=express.Router();
router.get("/users",usercontroller.getAllUsers);
router.get("/user/:email",usercontroller.getUser);
router.post("/adduser",usercontroller.createUser);
router.put("/updateuser/:email",usercontroller.editUser);
router.delete("/removeuser/:email",usercontroller.deleteUser);

module.exports=router;