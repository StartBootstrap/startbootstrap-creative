#BASE IMAGE

FROM node:18-alpine

#WORKDIR

WORKDIR /app

#COPY

#COPY DEPENDENCIES FIRST
COPY package*.json ./

#ClEAN INSTALL DEPENDENCIES
RUN npm install

#COPY WHAT IS NEEDED (MUST HAVE FOLDERS)
COPY src ./src
COPY scripts ./scripts

#NON-ROOT USER
RUN addgroup -S appgroup && adduser -S appuser -G appgroup \
    && chown -R appuser:appgroup /app
USER appuser

#BUILD
RUN npm run build


#EXPOSE
EXPOSE 3000

#CMD
CMD ["node", "scripts/start.js"]


