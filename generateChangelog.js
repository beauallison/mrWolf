const parseChangelog = require('changelog-parser');
const package = require('./package.json');
const fs = require('fs').promises;

const CURRENT_VERSION = package.version;

module.exports = async () => {
  const changelog = await parseChangelog('./CHANGELOG.md');

  const currentLog = changelog.versions.find(({ version }) => version === CURRENT_VERSION);

  if (currentLog) {
    await fs.writeFile('changelog.json', JSON.stringify(currentLog));
  }
};
