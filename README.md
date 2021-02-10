# 🌍 womenindatanepal website
[![MIT license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat)](https://github.com/okfnepal/widnepal-web/blob/master/LICENSE)

Website for the steering committee of "women in data nepal"

### Website powered with:
**CMS** : [WordPress](https://wordpress.com/)  \
**Frontend** : [NextJS](https://nextjs.org/)

## Clone this project
- ```git clone git@github.com:okfnepal/widnepal-web.git```
- ```cd widnepal-web```

## Setup WordPress CMS
- ```cd Wordpress\ CMS/```
- Run: `docker-compose up -d`
- After the command exit, goto `http://localhost:8000/` on your browser.
- Setup the WordPress Dashboard by providing name of site, username, password and other information.
- Goto "Plugins" > "Add New". Search and install the plugin "WPGraphQL" and then activate the plugin.

## Setup NextJS Frontend
- ```cd NextJS\ Site/```
- ```yarn install```
- ```yarn dev```
