FROM shito/alpine-node-gulp

WORKDIR /usr/src/app/app
COPY . /usr/src/app/app/
RUN npm install --only=production
RUN npm rebuild node-sass
RUN npm install --global gulp-cli

EXPOSE 8080
CMD ["gulp", "vendor"]
