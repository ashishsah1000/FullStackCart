const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Name"],
        trim: true,
        maxlength: [100, "Please enter below 100 text"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter price"],
        maxlength: [5, "Please enter below 5 text"],
        default: 0.0
    },
    discription: {
        type: String,
        required: [true, "Please Enter Discription"]
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
            required: [true, "missing public id"]
        },
        url: {
            type: String,
            required: [true, "missing public url"]
        }
    }],
    catergory: {
        type: String,
        required: [true, "missing catergory for this product"],
        enum: {
            values: ["Electronics", "Cameras", "Laptop", "Accessories", "Headphones", "Food", "Books", "Cloths/Shoes", "Beauty/Health", "Sports", "Outdoor", "Home"],
            message: "Plese select correct category for this product"
        }
    },
    seller: {
        type: String,
        required: [true, "Please enter product seller"],
    },
    stock: {
        type: Number,
        required: [true, "Please enter the stock"],
        maxlength: [5, "max 5 charectes"]
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        name: {
            type: String,
            required: [true, "Name is missing"]
        },
        rating: {
            type: String,
            required: [true, "rating is missing"]
        },
        comment: {
            type: String,
            required: [true, "Comment is missing"]
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model('Product', productSchema)