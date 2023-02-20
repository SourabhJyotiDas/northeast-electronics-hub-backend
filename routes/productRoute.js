const express = require("express");
const { getallProducts, createProduct, UpdateProduct, deleteProduct, getProductsDetails, createProductReview, deleteReview, getAllProductReview, getAdminProducts } = require("../controllers/productController");
// const { authorisedRoles } = require("../middleware/auth");
const router = express.Router();

//Our All Routes 

router.route("/products").get(getallProducts)

router.route("/admin/product/new").post(createProduct)

router.route("/admin/product/:id").put(UpdateProduct)

router.route("/admin/product/:id").delete(deleteProduct)

router.route("/product/:id").get(getProductsDetails)

router.route("/review").put(createProductReview)

router.route("/reviews").get(getAllProductReview)

router.route("/reviews").delete(deleteReview)


router.route("/admin/products").get(getAdminProducts)


module.exports = router