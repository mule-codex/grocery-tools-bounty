import express from "express"
import { createProduct, getAllProducts, getProductById } from "../controllers/Product.controller.js"
import { createCatergory, getAllCategories, getCategoryById } from "../controllers/categories.controller.js"

const router = express.Router()
router.post("/product", createProduct)
router.get("/products", getAllProducts)
router.get("/product/:id", getProductById)
//categories
router.post("/category", createCatergory)
router.get("/categories", getAllCategories)
router.get("/category/:id", getCategoryById)
export default router
