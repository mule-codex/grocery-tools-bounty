import express from "express"
import { createProduct } from "../controllers/createProduct.controller.js"

const router = express.Router()

router.get("/createproduct", createProduct)
export default router
