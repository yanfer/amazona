import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  /* quitamos lo que haya antes */
  await Product.deleteMany({});
  /* llamamos a los productos de la base de datos */
  const createdProducts = await Product.insertMany(data.products);

  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  /* los llevamos a la app */
  res.send({ createdProducts, createdUsers });
});

export default seedRouter;
