FROM node:20
ENV NODE_ENV development

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

RUN apt-get update && apt-get install -y curl

CMD ["yarn", "start"]
