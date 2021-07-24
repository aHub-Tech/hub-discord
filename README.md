# hub-discord

<p align="center">
  <a href="#introdução">Introdução</a> |
  <a href="#tecnologias">Tecnologias</a> |
  <a href="#contribuindo">Contribuindo</a> |
  <a href="#">Implementações</a>
</p>

## Introdução
Um bot de Discord para entreterimento de membros e gerenciamento do servidor, como cargo por reação e criação de canal.

## Tecnologias
As ferramentas e tecnologias usadas no projeto foram:

- **Node.js**
- **Typescript**
- **TS-Node-Dev**
- **Discord.js**

## Contribuindo
Para começar você pode clonar o repositório e instalar as dependencias, com os seguinte comandos.

Clonando repositório.
```bash
git clone https://github.com/aHub-Tech/hub-discord.git
# gh repo clone aHub-Tech/hub-discord
```

Instalando as dependencias.
```bash
yarn install
```

### Configurando variáveis de ambiente
Antes de iniciar o projeto você precisa configurar algumas variáveis de ambiente, crie um arquivo `.env` na raiz do projeto, com as seguintes variáveis.
```env
SECRET_TOKEN=your_secret_token
```

Para iniciar o projeto você pode usar o seguinte comando.
```bash
yarn dev
```

## Implementações

### Reaction Role
Reaction Role é comando de cargo por reação criado para dar e remover cargos dos membros a partir da reção.

para usar o comando basta digitar `h.rr` no chat. O bot irá enviar a menssagem presente em `reaction.json`, e adicionar as reações. A mensagem e as reações estão em `json`, mas futuramente poderão vir de uma API.