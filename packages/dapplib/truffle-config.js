require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain modify inflict infant flee toss'; 
let testAccounts = [
"0xb2c53409b76171c152088a6843af2ecbf59b2c499c3d5eeac90b1dea616b596f",
"0x3d4c02df40b8b4bcc3936b95b62dcb0771f92bbf292cf7d31fa5e940477fc61a",
"0xfe323c5f80dd129cc1e7b27066142ff61099df7a4346e840e7eb58d0bd91544d",
"0xa1a2520fb42bc921d4732e0e7bbb9a034535a90cfcdc5257212df454374c2590",
"0x23fd23d2c23476de2be862646c7e885d82bce7a335c5fc839c7235b0b8853962",
"0xe779ba580ad1445c63d915d66a9800e5de0a40424510264e0e2285acf62241be",
"0x1bec5dcfd6c1b63c180ff81d53e7066a5d3100cb1809b38f35fe762f53a8a161",
"0xfa8f95cfc6ac29a30005cdde624097dc1336a88800c3bfb82a49c4b578ac08ab",
"0x12cc6f9324859252cc211dcb70dfac4f11e24da1450629f9d179797756e4e43b",
"0x35a1b82a7585553b10b6854271fe09428c62e3e011fd114678dbfc2694642673"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
