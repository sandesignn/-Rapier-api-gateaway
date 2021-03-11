const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

const productHandler = require("./handler/products");

router.post("/add_category", verifyToken, productHandler.addCategory);
router.post("/add_imageurl", verifyToken, productHandler.addImageUrl);
router.post("/add_product", verifyToken, productHandler.addProduct);
router.get("/:id", productHandler.getProduct);
router.get("/", productHandler.getProducts);

module.exports = router;
