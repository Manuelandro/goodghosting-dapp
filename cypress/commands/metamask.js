

const puppeteer = require('./puppeteer');

let walletAddress;

module.exports = {
    initialSetup: async ({ secretWordsOrPrivateKey, network, password }) => {
        const isCustomNetwork =
          process.env.NETWORK_NAME && process.env.RPC_URL && process.env.CHAIN_ID;

        await puppeteer.init();
        await puppeteer.assignWindows();
        await puppeteer.metamaskWindow().waitForTimeout(1000);
        if (
          (await puppeteer.metamaskWindow().$(unlockPageElements.unlockPage)) ===
          null
        ) {
          await module.exports.confirmWelcomePage();
          if (secretWordsOrPrivateKey.includes(' ')) {
            await module.exports.importWallet(secretWordsOrPrivateKey, password);
          } else {
            await module.exports.createWallet(password);
            await module.exports.importFromPrivateKey(secretWordsOrPrivateKey);
          }
          if (isCustomNetwork) {
            await module.exports.addNetwork(network);
          } else {
            await module.exports.changeNetwork(network);
          }
          walletAddress = await module.exports.getWalletAddress();
          await puppeteer.switchToCypressWindow();
          return true;
        } else {
          await module.exports.unlock(password);
          walletAddress = await module.exports.getWalletAddress();
          await puppeteer.switchToCypressWindow();
          return true;
        }
    }
}