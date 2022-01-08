const express = require("express");
const validate = require("../../middlewares/validate");
const tenantValidation = require("../../validations/tenant.validation");
const { tenantController } = require("./../../controllers");
const { auth } = require("../../middlewares/auth");

const router = express.Router();

router
  .route("/")
  .get(auth, tenantController.getListTenant)
  .post(
    auth,
    validate(tenantValidation.createTenant),
    tenantController.createTenant
  );

module.exports = router;
