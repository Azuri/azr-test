var Models = require('rle/models');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var prod = new Models.Product({
    SKU: '0001',
    name: 'Coffee',
    desc: 'Delicious coffee'
});

prod.save(function(err){
    if (err) {
        return console.error(err);
    }
    console.log('Saved.');
});