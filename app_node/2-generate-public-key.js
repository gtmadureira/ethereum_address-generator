var CryptoJS = require('cryptojs').Crypto;
var ec = require('eccrypto');

var privateKey = process.argv[2];

var publicKeyBytes = ec.getPublic(Buffer.from(CryptoJS.util.hexToBytes(privateKey)));

var pKey = CryptoJS.util.bytesToHex(publicKeyBytes).toUpperCase();

console.log("");
console.log(" ###########################################################################");
console.log(" #                                                                         #");
console.log(" #          Public Key (uncompressed, 130 characters [0-9A-F])             #");
console.log(" #                                                                         #");
console.log(" #   ", pKey.substr(0,65), "   #");
console.log(" #   ", pKey.substr(65,130), "   #");
console.log(" #                                                                         #");
console.log(" ###########################################################################");
