var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    email: { type: String, trim: true },
    age: { type: Number, min: 0, set: Math.ceil }
});

Schema
    .virtual('name')
    .get(function(){
        return [this.firstName, this.lastName].join(' ');
    });
    
module.exports = mongoose.model('Person', Schema);
