// ln -nsf ../lib lib 
// creates symlink to /lib in node_modules/rle

var fs = require('fs');
var lib = '../lib';
var dest = 'node_modules/rle';

fs.exists(dest, function(found){
    if (!found) {
      fs.symlinkSync(lib, dest,'dir');
    }
});