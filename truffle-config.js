require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic =
"nerve this duck material wing express wait satisfy adapt gospel lobster steak";
module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/cc5b9bb3acde47ba92e83965322b880f"),
       network_id: 4,       // Ropsten's id
       gas: 5500000,        // Ropsten has a lower block limit than mainnet
       confirmations: 2,    // # of confs to wait between deployments. (default: 0)
       timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
       skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    /*development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
      */
    },
  
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
