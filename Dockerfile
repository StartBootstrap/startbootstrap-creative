FROM shito/alpine-node-gulp

WORKDIR /usr/src/app/
COPY . /usr/src/app/

RUN npm install --only=production
RUN npm rebuild node-sass
RUN npm install --global gulp-cli

EXPOSE 8080
ENTRYPOINT ["gulp"]
CMD ["default"]
