# Ecoleta

## Sobre

Ecoleta é uma aplicação open source para identificação de pontos de coleta de resíduos. Como fez parte de um evento semanal gratuito da Rocketseat chamado Next Level Week, é provável que você encontre projetos parecidos com esse aqui no Github.
Caso queira consultar meus projetos pessoais, recomendo [esse](https://github.com/rodrigolemos/my-school-front) repositório para front-end e [esse](https://github.com/rodrigolemos/my-school) repositório para back-end.
O real intuito desse repositório, para mim, foi conhecer um novo Query Builder/ORM (neste projeto foi utilizado o [Knex](http://knexjs.org/)), e construir um back-end para aprofundar os estudos na construção de apps com React Native.
O app mobile construído com base nesse repositório encontra-se [aqui](https://github.com/rodrigolemos/ecoleta-front).

## Como executar o projeto localmente

Certifique-se que você tenha instalado em sua máquina o [Git](https://git-scm.com), o [NodeJS](https://nodejs.org/en/) e o [PostgreSQL](https://www.postgresql.org/). Em seguida, execute os seguintes passos:

```bash
# Clone este repositório
$ git clone https://github.com/rodrigolemos/ecoleta

# Acesse a pasta do projeto
$ cd ecoleta

# Instale as dependências
$ npm install

# Rode as migrations para criação das tabelas
$ npm run knex:migrate

# Rode as seeds para preenchimento das tabelas
$ npm run knex:seed

# Execute a aplicação em modo de desenvolvimento
$ npm run start
```

Após esses passos, aplicação estará disponível na porta 3000  - http://localhost:3000.

## Autor

Rodrigo Lemos
