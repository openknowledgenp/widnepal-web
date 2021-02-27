const withPlugins = require('next-compose-plugins');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const withImages = require('next-images')
const withNextEnv = nextEnv();
dotenvLoad();
module.exports = withPlugins(
  [
    [withNextEnv, { /* plugin config here ... */ }],
    [withImages,  { /* plugin config here ... */ }],
  ],
  {
    /* global config here ... */
  },
);
