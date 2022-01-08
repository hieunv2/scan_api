const { tenantService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const apiResponse = require("../utils/apiResponse");

const createTenant = catchAsync(async (req, res, next) => {
  const response = await tenantService.createTenant(req.body);
  if (response) {
    const { data } = response;

    return apiResponse.successResponseWithData(
      res,
      "Create tenant successfully",
      response
    );
  }
  return apiResponse.ErrorResponse(res, "Create tenant fail");
});

const getListTenant = catchAsync(async (req, res, next) => {
  const response = await tenantService.getListTenant();
  if (response) {
    return apiResponse.successResponseWithData(
      res,
      "Get list tenant successfully",
      response
    );
  }
  return apiResponse.ErrorResponse(res, "Fail");
});

const getTenantById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const response = await tenantService.getTenantById(id);
  if (response) {
    return apiResponse.successResponseWithData(
      res,
      "Get tenant successfully",
      response
    );
  }
  return apiResponse.ErrorResponse(res, "Fail");
});

const getTenantByRequesterId = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const response = await tenantService.getTenantByRequesterId(id);
  if (response) {
    return apiResponse.successResponseWithData(
      res,
      "Get tenant successfully",
      response
    );
  }
  return apiResponse.ErrorResponse(res, "Fail");
});

const deleteTenant = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const response = await tenantService.deleteTenant({ id });
  if (response) {
    return apiResponse.successResponseWithData(
      res,
      "Get tenant successfully",
      response
    );
  }
  return apiResponse.ErrorResponse(res, "Fail");
});

module.exports = {
  createTenant,
  getListTenant,
  getTenantById,
  getTenantByRequesterId,
  deleteTenant,
};
