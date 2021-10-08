const axios = require('axios');
const path = require('path');
const zip = require('cross-zip');
const fs = require('fs');

module.exports = (on, config) => {

  on('before:browser:launch', async (browser = {}, arguments_) => {
    // NOTE: extensions cannot be loaded in headless Chrome
    const metamaskPath = await prepareMetamask();
    arguments_.extensions.push(metamaskPath);
    return arguments_;
  })

  on('task', {
    setupMetamask: async ({
      secretWordsOrPrivateKey,
      network = 'kovan',
      password,
    }) => {
      if (process.env.NETWORK_NAME) {
        network = process.env.NETWORK_NAME;
      }
      if (process.env.PRIVATE_KEY) {
        secretWordsOrPrivateKey = process.env.PRIVATE_KEY;
      }
      if (process.env.SECRET_WORDS) {
        secretWordsOrPrivateKey = process.env.SECRET_WORDS;
      }
      await metamask.initialSetup({
        secretWordsOrPrivateKey,
        network,
        password,
      });
      return true;
    },
  })
}


async function prepareMetamask() {
  const release = await getMetamaskReleases();
  const downloadsDirectory = path.resolve(__dirname, 'downloads');
  if (!fs.existsSync(downloadsDirectory)) {
    fs.mkdirSync(downloadsDirectory);
  }
  const downloadDestination = path.join(downloadsDirectory, release.filename);
  await download(release.downloadUrl, downloadDestination);
  const metamaskDirectory = path.join(downloadsDirectory, 'metamask');
  await extract(downloadDestination, metamaskDirectory);
  return metamaskDirectory;
}


async function getMetamaskReleases(version) {
  let filename;
  let downloadUrl;

  const response = await axios.get(
    'https://api.github.com/repos/metamask/metamask-extension/releases',
  );

  if (version === 'latest' || !version) {
    filename = response.data[0].assets[0].name;
    downloadUrl = response.data[0].assets[0].browser_download_url;
  } else if (version) {
    filename = `metamask-chrome-${version}.zip`;
    downloadUrl = `https://github.com/MetaMask/metamask-extension/releases/download/v${version}/metamask-chrome-${version}.zip`;
  }

  return {
    filename,
    downloadUrl,
  };
}

async function download (url, destination) {
    const writer = fs.createWriteStream(destination);
    const result = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });
    await new Promise(resolve =>
      result.data.pipe(writer).on('finish', resolve),
    );
  }
async function extract(file, destination) {
  await zip.unzip(file, destination);
}