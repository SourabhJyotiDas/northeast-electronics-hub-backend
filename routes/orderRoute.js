const express = require("express");
const router = express.Router();
const { newOrder, myOrders, singleOrder, getAllOrders, updateOrder, deleteOrder } = require("../controllers/orderController");
// const { isAuthenticatedUser, authorisedRoles } = require("../middleware/auth");





router.route("/order/new").post(newOrder)

router.route("/order/:id").get(singleOrder)

router.route("/orders/me").get(myOrders)

router.route("/admin/orders").get(getAllOrders)

router.route("/admin/order/:id").put(updateOrder)

router.route("/admin/order/:id").delete(deleteOrder)


module.exports = router;


module.exports = router;
