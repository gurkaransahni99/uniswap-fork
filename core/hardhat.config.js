/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-ethers");
// require('hardhat-contract-sizer');
// require("solidity-coverage");

// require('hardhat-spdx-license-identifier');
// require("hardhat-gas-reporter");
const CONFIG = require("../credentials.js");

module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.5.16",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000
                    }
                },
            }
        ]
    },
    spdxLicenseIdentifier: {
        overwrite: true,
        runOnCompile: true,
    },
    // gasReporter: {
    //     currency: 'USD',
    //     gasPrice: 1
    // },
    defaultNetwork: "hardhat",
    mocha: {
        timeout: 1000000000000
    },

    networks: {
        hardhat: {
            forking: {
                // url: "https://e93ba240ecf94244a82f2f141091d14c.eth.rpc.rivet.cloud",
                url: "https://bsc-dataseed.binance.org/",
                timeout: 1000000000000
            },
            blockGasLimit: 10000000000000,
            allowUnlimitedContractSize: true,
            timeout: 1000000000000,
            accounts: {
                accountsBalance: "9999000000000000000000000000000000",
                count: 20
            },
        },
        ropsten: {
            url: `https://ropsten.infura.io/v3/${CONFIG.infura.mainEndpoint}`,
            accounts: [`${CONFIG.wallet.PKEY}`]
        },
        kovan: {
            url: `https://kovan.infura.io/v3/${CONFIG.infura.mainEndpoint}`,
            accounts: [`${CONFIG.wallet.PKEY}`]
        },
        bscTestnet: {
            url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
            accounts: [`${CONFIG.wallet.PKEY}`]
        }
    },

    contractSizer: {
        alphaSort: false,
        runOnCompile: true,
        disambiguatePaths: false,
    }
};
