var CryptoJS = require('cryptojs').Crypto;

var privateKey = CryptoJS.util.randomBytes(32);
var privateKeyHex = CryptoJS.util.bytesToHex(privateKey).toUpperCase();

console.log(privateKeyHex);
