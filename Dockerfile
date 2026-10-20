FROM node:20-alpine
WORKDIR /
COPY package*.json ./
RUN npm install --only-production
EXPOSE 3000
COPY . .

CMD ["node", "index.js"]
