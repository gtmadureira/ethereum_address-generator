var CryptoJS = require('cryptojs').Crypto;
var ec = require('eccrypto');
var keccak256 = require('keccak256');

var privateKey = process.argv[2];

var publicKeyBytes = ec.getPublic(Buffer.from(CryptoJS.util.hexToBytes(privateKey)));

var pKeyHex = CryptoJS.util.bytesToHex(publicKeyBytes);

var pKey = pKeyHex.substr(2,130);

var hash = keccak256(CryptoJS.util.hexToBytes(pKey)).toString('hex');

var address = hash.substr(24,64).toUpperCase();

console.log("");
console.log(" ###########################################################################");
console.log(" #                                                                         #");
console.log(" #                             Ethereum Address                            #");
console.log(" #                                                                         #");
console.log(" #               ", "0x" + address, "              #");
console.log(" #                                                                         #");
console.log(" ###########################################################################");
console.log("");
