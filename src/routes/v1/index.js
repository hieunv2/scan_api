const express = require("express");
const tenantRoute = require("./tenant.route");
const userRoute = require("./user.route");

const router = express.Router();

router.use("/tenant", tenantRoute);
router.use("/user", userRoute);

module.exports = router;
