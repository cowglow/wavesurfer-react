FROM node:18
WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn install --mutex file:/usr/local/share/.cache/yarn/.yarn-mutex

COPY . .

EXPOSE 3000
EXPOSE 6006
ENV NODE_ENV=development

CMD ["yarn","dev"]