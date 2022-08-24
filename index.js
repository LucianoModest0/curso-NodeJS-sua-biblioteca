import chalk from "chalk";

import * as fs from "fs";

// using regex to find links inside markdown file and return an object array
function extractLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrResults = [];
  let temp;

  while ((temp = regex.exec(text)) !== null) {
    arrResults.push({
      [temp[1]]: temp[2],
    });
  }

  return arrResults.length === 0 ? "Não há links" : arrResults;
}

// function to show erros using throw
function treatError(err) {
  throw new Error(chalk.red(err.code, "sem arquivo no diretório"));
}

// // using async and await to an asynchronous code, try/cath to to capture errors

export default async function takeFile(filePath) {
  const encoding = "utf-8";

  try {
    const text = await fs.promises.readFile(filePath, encoding);
    return extractLinks(text);
  } catch (err) {
    treatError(err);
  }
}

//takeFile("./text.md");

/* >>> use promises to an asynchronous code, 'then' is callback method here and 'catch' shows error
function takeFile(filePath) {
  const encoding = "utf-8";
  fs.promises
    .readFile(filePath, encoding)
    .then((text) => console.log(text))
    .catch((err) => treatError(err));
}

takeFile("./text.md"); */

/* >>>>>>>>>>> using fs.readFile, with filepath, code in utf-8 and callback function

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
*/

/* >>>>>>>>>>> Content from initial project/ testing chalk

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
