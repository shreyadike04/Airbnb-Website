const express = require("express");
const router = express.Router();

//post
//index
router.get("/", (req, res) =>{
    res.send("GET for posts");
});

//show- router
router.get("/:id", (req, res) =>{
    res.send("GET for post id");
});

//post- router
router.get("/", (req, res) =>{
    res.send("POST for posts");
});

//DELETE- router
router.delete("/:id", (req, res) =>{
    res.send("delete for posts id");
});

module.exports = router;