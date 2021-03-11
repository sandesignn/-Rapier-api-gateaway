const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

const orderHandler = require("./handler/orders");

router.post("/make_order", verifyToken, orderHandler.makeOrder);
module.exports = router;
