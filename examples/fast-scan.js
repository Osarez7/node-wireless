
var Wireless = require('../index.js');

var connected = false;
var wireless = new Wireless({});


wireless.fastScan(console.log);
wireless.listKnownNetworks(console.log);
