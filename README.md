## Curso de NodeJS: criando sua biblioteca

#### Aprendizados adquiridos durante o curso:

- Importação e utilização de código de repositórios de código aberto
- Promessas e código assíncrono em NodeJS
- Expressões regulares para resolver problemas
- Bibliotecas do NodeJS para fazer requisições HTTP e manejo de respostas
- Testes de unidade com Jest

#### O Curso faz parte da formação Javascript para BackEnd em sua terceira parte, _Avançando com ferramentas e paradigmas_

### Steps taken at this project

#### Create my package.json file

> npm init -y

#### Create a .gitigonore file

> node_modules

##### The package chalk was used on this project

Install

> npm install chalk

https://www.npmjs.com/package/chalk

Use:

> import chalk from "chalk";

> if (node .\index.js === SyntaxError ) {
> add type:"modules" in ./package.json
> }

#### import fs

> import \* as fs from "fs";

see more about fs [here](https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/)

#### regex to find links in markdown files

> const regex = /\[([^\]]_)\]\((https?:\/\/[^$#\s].[^\s]_)\)/gm;

#### create cli.js

I had some errors about module, so... in cli.js instead of using

> const takeFile = require('.index')

i use

> import takeFile from "./index.js";

at index.js instead of use

> module.exports = takeFile

i use in the function

> export default

#### cli as library

add at package.json:

> "cli": "node cli.js ./text.md"

at terminal you can run the code using

> npm run cli

#### install node-fetch

> npm install node-fetch

see more about node-fetch [here](https://www.npmjs.com/package/node-fetch)

#### install jest to unit test

> npm install --save-dev jest

see more about jest [here](https://jestjs.io/pt-BR/)

change test in package.json to:

> "test": "jest ./test",

exec

> npm run test

- ERROR ESM -

  How to [fix](https://cursos.alura.com.br/forum/topico-teste-nao-funciona-resolvido-192606)
