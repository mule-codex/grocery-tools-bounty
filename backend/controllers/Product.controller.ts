import { Request, Response } from "express"
import productModel from "../models/product.model.js";
import { v4 as uuidv4 } from 'uuid';

export const createProduct = async (req: Request, res: Response) => {
  let { name, description, images, price, tags, categoryId, discount = 0 } = req.body;

  //discount
  if (discount) {
    if (discount < 0 || discount > 100) {
      return res.status(400).send("your discount is way too low or way to high only from 0 to 100")
    }
    price = price - (price * (discount / 100))
  }
  //empty strings
  if (!name || !description || price === "") {
    return res.status(400).send(" one of the inputs is empty")
  }
  try {
    await productModel.create({
      id: uuidv4(),
      name,
      description,
      images,
      price,
      tags,
      categoryId,
    })

    res.status(201).send("product created")
  }
  catch (err) {
    console.error(err)
    return res.status(500).json({
      "msg": "error occured while creating ptoduct"
    })
  }
}
export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    let Allproducts = await productModel.findAll();
    if (!Allproducts) {
      return res.status(200).json({ "msg": "no product found" })
    }
    return res.status(200).json(Allproducts);

  }
  catch (error) {
    return res.status(500).json("something wrong")
  }
}
export const getProductById = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  try {
    let product = await productModel.findOne({
      where: {
        id: id,
      }
    })
    if (!product) {
      return res.status(400).json({ "msg": "not found" })
    }
    return res.status(200).json(product)
  }
  catch (error) {
    console.error(error);

    return res.status(500).json({
      "msg": "something  is wrong"
    }
    )
  }
}
