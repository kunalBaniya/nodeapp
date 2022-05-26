const User = require("./user.model");

exports.findAll = async () => {
  return await User.find();
};

exports.findById = async (id) => {
  return await User.findById(id);
};

exports.create = async (payload) => {
  const user = new User(payload);
  return await user.save();
};

exports.update = async (id, payload) => {
  return await User.findByIdAndUpdate(id, payload);
};

exports.delete = async (id) => {
  return await User.findByIdAndDelete(id);
};