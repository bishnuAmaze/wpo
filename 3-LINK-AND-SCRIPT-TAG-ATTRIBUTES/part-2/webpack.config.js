const legacyConfig = require('./webpack.config.legacy');
const modernConfig = require('./webpack.config.modern');

module.exports = [
    legacyConfig,
    modernConfig,
];
