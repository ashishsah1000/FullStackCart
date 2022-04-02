const express = require("express");

const router = express.Router();

const {
  newProduct,
  getProducts,
  getSingleProducts,
  updateProduct,      
  deleteProduct,
} = require("../controllers/productController");

router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProducts);
router.route("/products/new").post(newProduct);
router.route("/admin/product/:id").put(updateProduct);
router.route("/admin/product/:id").delete(deleteProduct);

module.exports = router;
