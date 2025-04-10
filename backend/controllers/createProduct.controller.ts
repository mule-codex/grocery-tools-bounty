import { Request, Response } from "express"
import productModel from "../models/product.model.js";
import { v4 as uuidv4 } from 'uuid';

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, images } = req.body;
  if (name || description || images == "") {
    res.status(400).send(" one of the inputs is empty")
    return
  }
  try {
    await productModel.create({
      id: uuidv4(),
      name,
      description,
      images
    })

    res.send("product created").status(201)
  }
  catch (err) {
    console.error(err)
    res.send("some problem occured while creating product").status(500)
  }
} 
