console.log("utils.js")

const info = "Node JS v.14.6.0"

const add = function(a,b){
    return a+b
}

/*
module.exports é uma feature muito importante do NodeJS que define as variáveis, funções e objetos
que podem ser utilizados em outros arquivos. Veja que eles pertencem apenas ao escopo do arquivo utils
e só podem ser utilizados por outros arquivos se forem exportadas
*/
module.exports = { info: info, add: add };
