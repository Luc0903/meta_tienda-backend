import mongoose, { model } from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        minLength: 3,
        maxLength: 30,
        trim: true,
    },
    image: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    },
    description: {
        type: String, 
        minLength: 10,
        maxLength: 100,
        trim: true,
        required: true,
    },
    price: {
        type: Number, 
        required: true,
        default: 0,
    },
    stock: {
        type: Number, 
        required: true,
        default: 0,
    },
    category: {
        type: String,
        required: true,
    } 
})

const Product = model('Product', productSchema)

export default Product;