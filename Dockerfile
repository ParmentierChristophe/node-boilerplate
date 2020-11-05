FROM node:lts-alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 8081
CMD npm run dev
