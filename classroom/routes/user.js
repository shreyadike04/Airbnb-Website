const express = require("express");
const router = express.Router();

//index- router
router.get("/", (req, res) =>{
    res.send("GET for users");
});

//show- router
router.get("/:id", (req, res) =>{
    res.send("GET for  users id");
});

//post- router
router.get("/:id", (req, res) =>{
    res.send("POST for users");
});

//DELETE- router
router.delete("/:id", (req, res) =>{
    res.send("delete for users id");
});

module.exports = router;
