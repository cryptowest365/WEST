const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require('fs');
const key = fs.readFileSync(".key").toString().trim();

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*",
        },
        testBsc: {
            provider: () => new HDWalletProvider(key, `https://data-seed-prebsc-1-s1.binance.org:8545/`),
            network_id: 97,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        },
        bsc: {
            provider: () => new HDWalletProvider(key, `https://bsc-dataseed.binance.org//`),
            network_id: 56,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        },
    },
    mocha: {
        // timeout: 100000
    },

    compilers: {
        solc: {}
    }
};
