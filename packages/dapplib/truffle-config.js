require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'install logic bottom trophy name rate stereo puppy harvest inhale equal genuine'; 
let testAccounts = [
"0x65c10d57de7a31a2013c6d251e8ab7698cf7626e02f460085e15868ef433993d",
"0xb267f233c7f1f95c35ab6140041936b0f10fc86fd8ea714e369d7170fecca7fe",
"0x893a471a7c1902524290c2b8f8f366bedced43006009c2fd9f7a3a0aa39c047d",
"0xe281575b92e1986df7268d04ca624ce803b7f2c01d1f8a5ca7c00108fbe8fda2",
"0xbb8687f9980d47c2b90ee9542139942790e21e2485cd7b9ec363607f57ea3aea",
"0x493749fde2b0bacdceebf83759a1f43cf87d3df43fa3b3da529a708b04ed3abe",
"0x5a159bf073f8375b24e43cdcf2df76811f5a9d00dfd41b1ea659ca86a8d0be45",
"0x47e34b7174942774f8da1d9e9305351ac6bcc9a14232c4f92030b05be2fcb3e4",
"0x7eb3310e54e99b0bf601a6fb167a83f016f011aa1218ec2cfa7143c3eb9d24c3",
"0x7e372b9ae774b9c66efaa7edf524b74ac2a5677f52597aee867745f6f764b75b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


