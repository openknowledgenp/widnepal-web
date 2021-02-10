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
Make sure you are in the project root directory
- Run: `docker-compose up -d`
- After the command exit, goto `http://localhost:8000/` on your browser.
- Setup the WordPress Dashboard by providing name of site, username, password and other information.
- Goto "Plugins" > "Installed Plugins". Find "WP GraphQL" and then activate the it. (You can manage plugins from `/wordpress/wp-content/plugins`.)
- Now setup the categories and tags as required.

## Setup NextJS Frontend
Make sure you are in the project root directory
- ```npm install```
- ```npm run dev```
