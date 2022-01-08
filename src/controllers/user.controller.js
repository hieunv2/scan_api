const { userService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const apiResponse = require("../utils/apiResponse");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../services/token.service");

const createUser = catchAsync(async (req, res, next) => {
  const response = await userService.createUser(req.body);
  if (response) {
    const { data } = response;

    return apiResponse.successResponseWithData(
      res,
      "Create user successfully",
      response
    );
  }
  return apiResponse.ErrorResponse(res, "Create job fail");
});

const getListUser = catchAsync(async (req, res, next) => {
  const response = await userService.getListUser(req.query);
  if (response) {
    return apiResponse.successResponseWithData(
      res,
      "Get list user successfully",
      response
    );
  }
  return apiResponse.ErrorResponse(res, "Fail");
});

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.findOneByEmail(email);
  if (!user) return apiResponse.ErrorResponse(res, "Email not found!");
  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return apiResponse.ErrorResponse(res, "Password not correct!");
  }
  const token = await generateToken(user._id);
  return apiResponse.successResponseWithData(res, "Login successfully", token);
};

const profile = async (req, res) => {
  return apiResponse.successResponseWithData(res, "Success", req.user);
};

module.exports = {
  login,
  profile,
  createUser,
  getListUser,
};
