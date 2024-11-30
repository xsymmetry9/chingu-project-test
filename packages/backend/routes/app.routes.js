const {Router} = require("express");
const router = Router();

router.get("/api", (req, res)=>{
    res.send({data: "Hello from backend"});
});