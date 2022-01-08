const { Tenant } = require("../models");
const mongoose = require("mongoose");

const createTenant = async (data) => {
  return Tenant.create({
    ...data,
    workRequest: [],
  });
};

const getListTenant = async () => {
  return Tenant.find().sort({ createAt: "desc" });
};

const getTenantById = async (id) => {
  return Tenant.findById(id);
};

const getListTenantById = async (list) => {
  return Tenant.find({
    _id: {
      $in: list.map((i) => mongoose.Types.ObjectId(i)),
    },
  }).sort({ createAt: "desc" });
};

const deleteTenant = async ({ id }) => {
  const response = await Tenant.findById(id);
  response.save();
};

module.exports = {
  createTenant,
  getListTenant,
  getTenantById,
  getListTenantById,
  deleteTenant,
};
