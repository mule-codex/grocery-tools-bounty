
import { Request, Response } from "express"
import { v4 as uuidv4 } from 'uuid';
import categoryModel from "../models/catergories.models.js";

export const createCatergory = async (req: Request, res: Response) => {
  const { name, parentId } = req.body;

  try {
    await categoryModel.create({
      id: uuidv4(),
      name,
      parentId: parentId || null,
    })

    res.status(201).send(" created")
  }
  catch (err) {
    console.error(err)
    return res.status(500).json({
      "msg": "error occured while creating category"
    })
  }
}
export const getAllCategories = async (_req: Request, res: Response) => {
  try {
    let Allcategories = await categoryModel.findAll();
    if (!Allcategories) {
      return res.status(200).json({ "msg": "no category found" })
    }
    return res.status(200).json(Allcategories);

  }
  catch (error) {
    return res.status(500).json("something wrong while findjng category")
  }
}
export const getCategoryById = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  try {
    let category = await categoryModel.findOne({
      where: {
        id: id,
      }
    })
    if (!category) {
      return res.status(400).json({ "msg": "not found" })
    }
    return res.status(200).json(category)
  }
  catch (error) {
    console.error(error);

    return res.status(500).json({
      "msg": "something  is wrong"
    }
    )
  }
}
