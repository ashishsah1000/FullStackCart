const express = require("express");

const router = express.Router();

const { newProduct, getProducts } = require("../controllers/productController");

router.route("/products").get(getProducts);
router.route("/products/new").post((req, res) => {
  console.log("post req detected");
  console.log(req.body);
  res.send("post request is working fine");
  newProduct(req, res);
});

module.exports = router;
