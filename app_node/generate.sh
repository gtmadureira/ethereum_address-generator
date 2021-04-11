#!/bin/zsh
clear
privkey=$(node 1-generate-private-key.js)
echo ''
echo ' ###########################################################################'
echo ' #                                                                         #'
echo ' #        Private Key Hexadecimal Format (64 characters [0-9A-F])          #'
echo ' #                                                                         #'
echo ' #     '$privkey'    #'
echo ' #                                                                         #'
echo ' ###########################################################################'
node 2-generate-public-key.js $privkey
node 3-generate-ethereum-address.js $privkey
