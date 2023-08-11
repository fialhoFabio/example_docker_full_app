FROM node:20
ENV NODE_ENV development

WORKDIR /app

RUN yarn install

EXPOSE 3000

RUN apt-get update && apt-get install -y curl

# Comando para rodar o yarn start e instalar as dependências
ENTRYPOINT ["sh", "-c", "yarn && yarn start"]
