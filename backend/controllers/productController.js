const Product = require("../models/product");
const ErrorHandler = require("../util/errorHandler");

exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// get all the products

exports.getProducts = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
};

// get single products details

exports.getSingleProducts = async (req, res, next) => {
  const product = await Product.findById(req.params.id).catch((err) => {
    console.log(err);
  });

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
};

// update product => /api/v1/admin/product:id

exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "product not found ",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

// delete product : /api/v1/admin/delete/product/id

exports.deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  console.log(product);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "product not found",
    });
  }

  product = await Product.deleteOne(product);
  res.status(200).json({
    success: true,
    message: "Product is deleted",
  });
};
