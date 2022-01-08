const mongoose = require("mongoose");
const { paginate } = require("./plugins");

const tenantSchema = mongoose.Schema({
  name: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

tenantSchema.plugin(paginate);

const tenant = mongoose.model("tenants", tenantSchema);

module.exports = tenant;
