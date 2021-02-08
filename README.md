# widnepal-web
A website of women in data steering committee
CMS == > [Wordpress](https://wordpress.com/) 
Frontend ==> Nextjs(https://nextjs.org/)

# Development setup setps
To develop local extensions use the docker-compose.dev.yml file:
To build the images
- Run docker compose for mysql and wordpress service  `docker-compose -f docker-compose.dev.yml build `
To start the containers:
docker-compose -f docker-compose.dev.yml up
