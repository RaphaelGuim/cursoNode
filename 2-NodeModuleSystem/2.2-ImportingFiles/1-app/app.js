const utils = require("./utils");

/*
Utilizando o require, o Node irá EXECUTAR o arquivo importado. Veja o resultado do console.
utils.js
Node JS v.14.6.0
5
*/
console.log(utils.info)
console.log(utils.add(2,3))

// também é possível selecionar apenas o que deseja importar do arquivo

// const {add,info} = require("./utils");
// console.log(info)
// console.log(add(2,3))

