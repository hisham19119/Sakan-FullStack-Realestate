const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const AllowedTo = require("../middlewares/allwoedTo");
const verifyToken = require("../middlewares/verifyToken");
const userValidators = require("../middlewares/validators/user.validator");
const userRoles = require("../utils/userRoles");
const authController = require("../controller/auth.controller");
const propertiesRouter = require("./property.routes");
// const propertyController = require()
const propertyController = require("../controller/property.controller");

// router.use("/:userId/properties", propertiesRouter);

router.get(
  "/:id/properties",
  verifyToken,
  propertyController.getUserProperties
);
router
  .route("/")
  .post()
  // AllowedTo(userRoles.ADMIN),
  // userValidators.createUserValidator,
  // userController.createOne
  // authController.register

  .get(
    // verifyToken, AllowedTo(userRoles.ADMIN),
    userController.getAll
  );

router
  .route("/:id")
  .get(
    // verifyToken, AllowedTo(userRoles.ADMIN),
    userController.getOne
  )
  .patch(
    // verifyToken,
    // AllowedTo(userRoles.ADMIN),
    // userValidators.updateUserValidator,
    userController.updateOne
  )
  .delete(verifyToken, AllowedTo(userRoles.ADMIN), userController.deleteOne);

// router.route("/login").post(authController.login);
// router.route("/logout").post(authController.logout);

module.exports = router;
