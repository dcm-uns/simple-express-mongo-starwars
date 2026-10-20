FROM node:26-alpine3.23
WORKDIR /
COPY package*.json ./
RUN npm install --only-production
EXPOSE 3000
COPY . .

CMD ["node", "index.js"]
