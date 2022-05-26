const { unlinkAsync } = require("../../../lib/filesystem");
const Photo = require("./photo.model");
const Album = require("../album/album.model");

exports.findAll = async () => {
  return await Photo.find().populate("albumId").populate("userId");
};

exports.findById = async (id) => {
  return await Photo.findById(id).populate("albumId").populate("userId");
};

exports.findByUserId = async (id) => {
  return await Photo.find({ userId: id })
    .populate("userId")
    .populate("albumId");
};

exports.findByAlbumId = async (id) => {
  return await Photo.find({ albumId: id })
    .populate("albumId")
    .populate("userId");
};

exports.create = async (payload) => {
  const photo = new Photo(payload);
  return await photo.save();
};

exports.update = async (id, payload) => {
  return await Photo.findByIdAndUpdate(id, payload);
};

exports.delete = async (id) => {
  const photo = await Photo.findById(id);
  await unlinkAsync(photo.imageUri);
  await Photo.findByIdAndDelete(id);
  return await Album.findByIdAndUpdate(photo.albumId, { updatedAt: Date.now() });
};
