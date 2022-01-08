const Joi = require("@hapi/joi");
const { objectId } = require("./custom.validation");

const createTenant = {
  body: Joi.object().keys({
    name: Joi.string()
      .min(3)
      .required(),
  }),
};

const getTenantById = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

const getTenantByRequesterId = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

const joinTenant = {
  body: Joi.object().keys({
    TenantId: Joi.string().custom(objectId),
    workerId: Joi.string().custom(objectId),
  }),
};

const rejectRequest = {
  body: Joi.object().keys({
    TenantId: Joi.string().custom(objectId),
    workerId: Joi.string().custom(objectId),
  }),
};

const acceptRequest = {
  body: Joi.object().keys({
    TenantId: Joi.string().custom(objectId),
    workerId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createTenant,
  getTenantById,
  getTenantByRequesterId,
  joinTenant,
  rejectRequest,
  acceptRequest,
};
