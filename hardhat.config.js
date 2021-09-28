require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/e8546a58c32d472790076824beaeae62`,
      accounts: {
        mnemonic: '****'
        // mnemonic: '***'
      }
    },
    goeri: {
      url: `https://goeri.infura.io/v3/e8546a58c32d472790076824beaeae62`,
      accounts: {
        mnemonic: '****'
      }
    },
    bsc: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {
        mnemonic: '****'
      }
    }
  }
};
