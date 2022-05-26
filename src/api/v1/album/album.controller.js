const albumService = require("./album.service");
const albumResource = require("./album.resource");
const respond = require("../../../lib/respond");

exports.getAllAlbums = async (req, res, next) => {
  try {
    const albums = await albumService.findAll();
    const data = await albumResource.collection(albums);
    return respond.success(res, data);
  } catch (err) {
    next(err);
  }
};

exports.getAlbumById = async (req, res, next) => {
  try {
    const album = await albumService.findById(req.params.id);
    const data = await albumResource.resource(album);
    return respond.success(res, data);
  } catch (err) {
    next(err);
  }
};

exports.getAlbumsByUserId = async (req, res, next) => {
  try {
    const albums = await albumService.findByUserId(req.params.id);
    const data = await albumResource.collection(albums);
    return respond.success(res, data);
  } catch (err) {
    next(err);
  }
};

exports.createAlbum = async (req, res, next) => {
  try {
    const { userId, name } = req.body;
    const payload = { userId, name };
    const album = await albumService.create(payload);
    const data = await albumResource.resource(album);
    return respond.created(res, data);
  } catch (err) {
    next(err);
  }
};

exports.updateAlbum = async (req, res, next) => {
  try {
    const { id, userId, name } = req.body;
    const payload = { userId, name };
    await albumService.update(id, payload);
    return respond.updated(res);
  } catch (err) {
    next(err);
  }
};

exports.deleteAlbum = async (req, res, next) => {
  try {
    await albumService.delete(req.params.id);
    return respond.deleted(res);
  } catch (err) {
    next(err);
  }
};