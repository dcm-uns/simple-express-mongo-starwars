FROM node:12.18.1-alpine
WORKDIR /
COPY package*.json ./
RUN npm install --only-production
EXPOSE 3000
COPY . .

CMD npm start
