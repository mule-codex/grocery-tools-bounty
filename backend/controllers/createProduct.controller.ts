import { Request, Response } from "express"
import productModel from "../models/product.model.js";
import { v4 as uuidv4 } from 'uuid';

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, images, price, tags } = req.body;
  if (!name || !description || price === "") {
    res.status(400).send(" one of the inputs is empty")
    return
  }
  try {
    await productModel.create({
      id: uuidv4(),
      name,
      description,
      images,
      price,
      tags,
    })

    res.send("product created").status(201)
  }
  catch (err) {
    console.error(err)
    res.status(500).json({
      "msg": "error occured while creating ptoduct"
    })
  }
} 
