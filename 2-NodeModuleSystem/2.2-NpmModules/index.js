const validator = require("validator")
const chalk = require('chalk');

console.log(chalk.whiteBright.bgRed.bold('Using chalk and validator'))

const email = "raphael.guimaraes0203@gmail.com"
const url = "google.com/br"

console.log(
    chalk.blue.bold("Checking e-mail..."),
    chalk.red(email),
    validator.isEmail(email)
);
console.log(
    chalk.blue.bold("Checking url..."),
    chalk.red(url),
    validator.isURL(url)
  );

console.log(
    chalk.green.bold.inverse("Success!")
  );