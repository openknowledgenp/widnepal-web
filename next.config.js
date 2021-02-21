const withImages = require('next-images')
const compose = require('next-compose');
require('dotenv').config();


const config = compose([withImages()])
config.serverRuntimeConfig = {
  WORDPRESS_API: process.env.WORDPRESS_API || 'http://localhost:8000/index.php?graphql'
};
config.publicRuntimeConfig = {
  WORDPRESS_API: process.env.WORDPRESS_API || 'http://localhost:8000/index.php?graphql',
}
module.exports = config;