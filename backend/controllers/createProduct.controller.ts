import { Request, Response } from "express"
import productModel from "../models/product.model.js";
import { v4 as uuidv4 } from 'uuid';

export const createProduct = async (req: Request, res: Response) => {
  let { name, description, images, price, tags, discount } = req.body;

  //discount
  if (discount) {
    if (discount < 0 || discount > 100) {
      res.status(400).send("your discount is way too low or way to high only from 0 to 100")
    }
    price = price - (price * (discount / 100))
  }
  //empty strings
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
