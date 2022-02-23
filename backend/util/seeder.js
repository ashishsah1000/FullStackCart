const Product = require("../models/product");
const dotenv = require("dotenv");
const conectDatabase = require("../config/database");
const products = require("../data/products");
const connectDatabase = require("../config/database");
const product = require("../models/product");

// setting the backend path

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();
const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("products are deleted");
    console.log("checing if products can be accessed", products);
    await Product.insertMany(products);
    console.log("all products are added");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

seedProducts();
