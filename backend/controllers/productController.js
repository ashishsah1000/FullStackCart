const Product = require("../models/product");

exports.newProduct = async (req, res, next) => {
  console.log("isnide new product");

  //   try {
  const product = await Product.create(req.body);
  //   } catch (err) {
  //     console.log(err);
  //   }
  res.status(201).json({
    success: true,
    product,
  });
};

exports.getProducts = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "this route will show all data in database",
  });
};
