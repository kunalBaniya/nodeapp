const userResource = require('../user/user.resource');
const { collection } = require("../../../lib/helpers");

exports.resource = (model) => {
  return {
    id: model._id,
    user: userResource.resource(model.userId),
    albumName: model.name,
    createdAt: model.createdAt,
    updatedAt: model.updatedAt,
  };
};

exports.collection = (models) => collection(models, this.resource);
