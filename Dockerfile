from node

WORKDIR /app

COPY package.json /

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
RUN npm install --prefix / && npm cache clean --force

EXPOSE 3000 3001

CMD ["npm", "start"]
