FROM node:lts-alpine
WORKDIR /app
COPY ./package*.json ./
RUN yarn
COPY . .
EXPOSE 8081
CMD npm run dev
