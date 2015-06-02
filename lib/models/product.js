var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    SKU: { type: String, trim: true },
    name: { type: String, trim: true },
    desc: { type: String, trim: true }
});

module.exports = mongoose.model('Product', Schema);
