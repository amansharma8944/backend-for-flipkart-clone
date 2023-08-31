import express from  "express"
import * as controller from "../controller/controller.js"
const router =express.Router()




router.post("/signup",controller.signup)
router.post("/login",controller.login)

router.get("/products",controller.products)
router.get("/product/:id",controller.productDetail)

export default router 