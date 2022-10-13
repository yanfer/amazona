import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    /* this is to add two more fiels, created time and updated time */
    timestamps: true,
  }
);

/* el model pide 2 parametros, 1 el nombre, 2 el esquema */
const Product = mongoose.model('Product', productSchema);
export default Product;
