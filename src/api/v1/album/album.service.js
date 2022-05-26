const Album = require("./album.model");

exports.findAll = async () => {
  return await Album.find().populate('userId');
};

exports.findById = async (id) => {
  return await Album.findById(id).populate('userId');
};

exports.findByUserId = async (id) => {
  return await Album.find({userId: id}).populate('userId');
}

exports.create = async (payload) => {
  const album = new Album(payload);
  return await album.save();
};

exports.update = async (id, payload) => {
  return await Album.findByIdAndUpdate(id, payload);
};

exports.delete = async (id) => {
  return await Album.findByIdAndDelete(id);
};