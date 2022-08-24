import chalk from "chalk";

import getFile from "./index.js";

import validURLs from "./httpValidation.js";

const path = process.argv;

async function processText(filePath) {
  const result = await getFile(filePath[2]);
  if (path[3] === "valid") {
    console.log(chalk.yellow("links validados"), await validURLs(result));
  } else {
    console.log(chalk.yellow("Lista de links"), result);
  }
}

processText(path);
