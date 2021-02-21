
FROM appsvcorg/wordpress-alpine-php:0.8

ENV GIT_REPO=https://github.com/WordPress/WordPress.git
ENV GIT_BRANCH=5.6
ENV WEBSITES_ENABLE_APP_SERVICE_STORAGE=true
RUN mkdir /home/site/wp-content
COPY wordpress/wp-content /home/site/wp-content
RUN sed -i '98i  cp -R /home/site/wp-content/plugins /home/site/wwwroot/wp-content' /usr/local/bin/entrypoint.sh
