const userService = require("./user.service");
const userResource = require("./user.resource");
const respond = require("../../../lib/respond");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.findAll();
    const data = await userResource.collection(users);
    return respond.success(res, data);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await userService.findById(req.params.id);
    const data = await userResource.resource(user);
    return respond.success(res, data);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, phoneNumber } = req.body;
    const payload = { firstName, lastName, phoneNumber };
    const user = await userService.create(payload);
    const data = await userResource.resource(user);
    return respond.created(res, data);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { id, firstName, lastName, phoneNumber } = req.body;
    const payload = { firstName, lastName, phoneNumber };
    await userService.update(id, payload);
    return respond.updated(res);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await userService.delete(req.params.id);
    return respond.deleted(res);
  } catch (err) {
    next(err);
  }
};