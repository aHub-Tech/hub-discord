<h1 align="center">HubBOT</h1>

<p align="center">
  <a href="#introdução">Introdução</a> |
  <a href="#tecnologias">Tecnologias</a> |
  <a href="#contribuindo">Contribuindo</a>
</p>

## Introdução
Um bot de Discord para entreterimento e gerenciamento de servidor.

## Tecnologias
Projeto desenvolvido usando as seguintes ferramentas:

- Node.js
- Typescript
- Jest
- Docker
- Docker-compose
- TS-Node-Dev
- Node-CRON
- Discord.js

## Contribuindo
Antes de começar leia o [guia de contribuição geral da comunidade](https://github.com/aHub-Tech/projects-template/blob/main/CONTRIBUTING.md).

Você pode clonar o repositório e instalar as dependências, com os seguinte comandos.

Clonando repositório.
```bash
git clone https://github.com/aHub-Tech/hub-discord.git
# gh repo clone aHub-Tech/hub-discord
```

Instalando as dependências.
```bash
yarn install
```

### Configurando variáveis de ambiente
Antes de iniciar o projeto você precisa configurar algumas variáveis de ambiente, crie um arquivo `.env` na raiz do projeto, com as seguintes variáveis.

```bash
# Secret token
SECRET_TOKEN=your_bot_secret_token

# Database informations
DATABASE_DB=your_database_name
DATABASE_HOST=your_database_host
DATABASE_PORT=your_database_port
DATABASE_USER=your_database_user
DATABASE_PASSWORD=your_database_password
```

Para iniciar o projeto você pode usar o seguinte comando.

```bash
yarn dev
```

Outros comandos que podem ser usados, e que estão presente no `package.json`.

```bash
# Fazer o build do projeto
yarn buid

# Iniciar com build do projeto
yarn start

# Rodar os testes
yarn test

# Usar a CLI do TypeORM
yarn typeorm
```