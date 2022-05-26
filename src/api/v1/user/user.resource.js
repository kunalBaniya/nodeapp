const { collection } = require("../../../lib/helpers");

exports.resource = (model) => {
  return {
    id: model._id,
    firstName: model.firstName,
    lastName: model.lastName,
    phoneNumber: model.phoneNumber,
    createdAt: model.createdAt,
    updatedAt: model.updatedAt,
  };
};

exports.collection = (models) => collection(models, this.resource);
