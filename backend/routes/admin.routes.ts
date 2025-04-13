import express from "express"
import { createProduct, getAllProducts, getProductById } from "../controllers/Product.controller.js"

const router = express.Router()
router.post("/product", createProduct)
router.get("/products", getAllProducts)
router.get("/product/:id", getProductById)
export default router
