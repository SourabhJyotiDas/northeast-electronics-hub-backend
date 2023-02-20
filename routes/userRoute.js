const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser, deleteUser, updateUserRole } = require("../controllers/userController");
// const { isAuthenticatedUser, authorisedRoles } = require("../middleware/auth");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(getUserDetails);

router.route("/password/update").put(updatePassword);

router.route("/me/update").put(updateProfile);

router.route("/admin/users").get(getAllUser);

router.route("/admin/user/:id").get(getSingleUser);

router.route("/admin/user/:id").put(updateUserRole);

router.route("/admin/user/:id").delete(deleteUser);

module.exports = router;