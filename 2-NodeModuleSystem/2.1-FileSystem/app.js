const fs = require("fs"); //Import do File System

//fs.writeFile(file_name, content, callback)

fs.writeFileSync("notes.txt", "Criando arquivos com NodeJs!\n");

//execute com node app.js
//writeFile e writeFileSync cria o arquivo caso ele não exista e sobreescreve o conteúdo desse arquivo.

fs.appendFileSync("notes.txt", "Informação Adicionada ao Arquivo.")

//appendFile e appendFileSync adiciona informações a um arquivo, criando caso ele não exista.
