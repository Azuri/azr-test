var Models = require('rle/models');
var log = require('rle/log');

var mongoose = require('mongoose');

//we must load mongoose from lib/models
//var mongoose = require('rle/models/node_modules/mongoose');

mongoose.connect('mongodb://localhost:27017/test');

var prod = new Models.Product({
    SKU: '0001',
    name: 'Coffee',
    desc: 'Delicious coffee'
});

log.info('About to save new product...');

prod.save(function(err){
    if (err) {
        return log.error(err);
    }
    log.info('Product saved with id ', prod._id); // won't be executed
});
