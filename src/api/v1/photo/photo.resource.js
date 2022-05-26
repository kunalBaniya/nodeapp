const userResource = require('../user/user.resource');
const albumResource = require('../album/album.resource');
const { collection } = require("../../../lib/helpers");

exports.resource = (model) => {
  return {
    id: model._id,
    user: userResource.resource(model.userId),
    album: albumResource.resource(model.albumId),
    photoName: model.name,
    imageUri: model.imageUri,
    createdAt: model.createdAt,
    updatedAt: model.updatedAt,
  };
};

exports.create = (model) => {
  return {
    id: model._id,
    user: model.userId,
    album: model.albumId,
    photoName: model.name,
    imageUri: model.imageUri,
    createdAt: model.createdAt,
    updatedAt: model.updatedAt,
  };
};

exports.collection = (models) => collection(models, this.resource);
