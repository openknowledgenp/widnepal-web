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
Make sure you are in the project's root directory.
- Run: `docker-compose up -d`
- After the command exit, goto `http://localhost:8000/` on your browser.
- Setup the WordPress Dashboard by providing name of site, username, password and other information.
- You need to install following  plugins "WP GraphQL", "Advanced custom fields" and "WID Custom plugin" then activate all plugins. (You can manage plugins from `/wordpress/wp-content/plugins`.)
- Add new categories with slugs: 'about-us', 'blog', 'contact', 'events', 'home', 'program-or-project' and 'resources'

## Setup NextJS Frontend
Make sure you are in the project's root directory.
- ```npm install```
- ```npm run dev```
