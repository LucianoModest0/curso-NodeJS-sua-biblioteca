import chalk from "chalk";

import * as fs from "fs";

function treatError(err) {
  throw new Error(chalk.red(err.code, "sem arquivo no diretório"));
}

function takeFile(filePath) {
  const encoding = "utf-8";
  fs.readFile(filePath, encoding, (err, txt) => {
    if (err) {
      treatError(err);
    }
    console.log(chalk.green(txt));
  });
}

takeFile("./text.md");

/* >>>>>>> Initial project/ testing chalk

console.log(chalk.red("Hello world!"));

console.log(chalk.green("let's start"));

console.log(chalk.blue.bgWhite.bold("okay"));

console.log(chalk.blue.bold("This is..."));

const text = "This text comes from a function";

function showText(string) {
  return string;
}

console.log(showText(text));
*/
