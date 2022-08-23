## Curso de NodeJS: criando sua biblioteca [ em andamento]

#### Aprendizados propostos durante o curso:

- Aprenda a importar e utilizar código de repositórios de código aberto
- Entenda o que são as promessas e como trabalhar com código assíncrono em NodeJS
- Escreva suas primeiras expressões regulares e veja como utilizá-las para resolver problemas
- Crie seus próprios comandos para serem executados no terminal
- Use as bibliotecas do NodeJS para fazer requisições HTTP e manejar respostas
- Faça seus primeiros testes de unidade com Jest

#### O Curso faz parte da formação Javascript para BackEnd em sua terceira parte, _Avançando com ferramentas e paradigmas_

### Steps taken in this project

Create my package.json file

> npm init -y

Create a .gitigonore file

> node_modules

The package chalk was used on this project

Install

> npm install chalk

https://www.npmjs.com/package/chalk

Use:

> import chalk from "chalk";

> if (node .\index.js === SyntaxError ) {
> add type:"modules" in ./package.json
> }

import fs

> import \* as fs from "fs";

see more about fs [here](https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/)

regex to find links in markdown files

> const regex = /\[([^\]]_)\]\((https?:\/\/[^$#\s].[^\s]_)\)/gm;
