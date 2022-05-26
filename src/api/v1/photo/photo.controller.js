const photoService = require("./photo.service");
const photoResource = require("./photo.resource");
const respond = require("../../../lib/respond");

exports.getAllPhotos = async (req, res, next) => {
  try {
    const photos = await photoService.findAll();
    const data = await photoResource.collection(photos);
    return respond.success(res, data);
  } catch (err) {
    next(err);
  }
};

exports.getPhotoById = async (req, res, next) => {
  try {
    const photo = await photoService.findById(req.params.id);
    const data = await photoResource.resource(photo);
    return respond.success(res, data);
  } catch (err) {
    next(err);
  }
};

exports.getPhotosByAlbumId = async (req, res, next) => {
  try {
    const photos = await photoService.findByAlbumId(req.params.id);
    const data = await photoResource.collection(photos);
    return respond.success(res, data);
  } catch (err) {
    next(err);
  }
};

exports.getPhotosByUserId = async (req, res, next) => {
  try {
    const photos = await photoService.findByUserId(req.params.id);
    const data = await photoResource.collection(photos);
    return respond.success(res, data);
  } catch (err) {
    next(err);
  }
};

exports.createPhoto = async (req, res, next) => {
  try {
    const { userId, albumId, name } = req.body;
    const payload = { userId, albumId, name, imageUri: req.file.path };
    const photo = await photoService.create(payload);
    const data = await photoResource.create(photo);
    return respond.created(res, data);
  } catch (err) {
    next(err);
  }
};

exports.updatePhoto = async (req, res, next) => {
  try {
    const { id, userId, albumId, name } = req.body;
    const payload = { userId, albumId, name, imageUri: req.file.path };
    await photoService.update(id, payload);
    return respond.updated(res);
  } catch (err) {
    next(err);
  }
};

exports.deletePhoto = async (req, res, next) => {
  try {
    await photoService.delete(req.params.id);
    return respond.deleted(res);
  } catch (err) {
    next(err);
  }
};