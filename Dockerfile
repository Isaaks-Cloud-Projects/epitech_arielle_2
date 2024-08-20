FROM node:18-alpine

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .

EXPOSE 5050
EXPOSE 6060

CMD ["npm", "start", "index.js"]