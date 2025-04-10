import { Request, Response } from "express"
import productModel from "../models/product.model.js";
import { v4 as uuidv4 } from 'uuid';

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, images } = req.body;
  const newProduct = await productModel.create({
    id: uuidv4(),
    name,
    description,
    images
  })
  res.send("product created")
} 
