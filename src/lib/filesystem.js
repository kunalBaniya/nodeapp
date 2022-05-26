const fs = require('fs');
const { promisify } = require('util');

exports.unlinkAsync = promisify(fs.unlink);