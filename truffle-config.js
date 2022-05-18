require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic =
"nerve this duck material wing express wait satisfy adapt gospel lobster steak";
module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/cc5b9bb3acde47ba92e83965322b880f"),
       network_id: 4,       
       gas: 5500000,       
       confirmations: 2,    
       timeoutBlocks: 200,  
       skipDryRun: true     
    },
    /*development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" 
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
