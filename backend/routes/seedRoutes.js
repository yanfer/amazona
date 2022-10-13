import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  /* quitamos lo que haya antes */
  await Product.deleteMany({});
  /* llamamos a los productos de la base de datos */
  const createdProducts = await Product.insertMany(data.products);
  /* los llevamos a la app */
  res.send({ createdProducts });
});

export default seedRouter;
