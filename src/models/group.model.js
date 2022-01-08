const mongoose = require("mongoose");
const { paginate } = require("./plugins");

const groupSchema = mongoose.Schema({
  name: { type: String, required: true },
  tenantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tenants",
  },
  users: { type: Array, required: true },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

groupSchema.plugin(paginate);

const group = mongoose.model("groups", groupSchema);

module.exports = group;
