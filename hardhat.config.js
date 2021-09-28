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
        mnemonic: 'promote involve unaware today camera major net tail area rule manual humor'
        // mnemonic: 'into exclude when nest zoo render draw spoil winner agree blind canvas'
      }
    },
    goeri: {
      url: `https://goeri.infura.io/v3/e8546a58c32d472790076824beaeae62`,
      accounts: {
        mnemonic: 'promote involve unaware today camera major net tail area rule manual humor'
      }
    },
    bsc: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {
        mnemonic: 'promote involve unaware today camera major net tail area rule manual humor'
      }
    }
  }
};
