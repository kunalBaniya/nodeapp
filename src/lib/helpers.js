exports.collection = (items, callback) => {
    return items.map(item => callback(item));
};