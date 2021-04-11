**Inicializando o NPM no seu projeto**

```
npm init
```
Inicializa as gerenciador de dependências no seu projeto.
Após preencher as informações ele criará o arquivo package.json
onde uma série de comandos, configurações e dependências são destinados ao seu projeto.

Utilize o site https://www.npmjs.com/ para explorar bibliotecas úteis para seu desenvolvimento.

Vampos utilizar a lib validator nesse exemplo.

https://www.npmjs.com/package/validator

Na raiz do seu projeto, onde se encontra o package.json, instale a dependência com o comando descrito no próprio npm.js

```
npm i validator@10.8.0
```
Ao instalar uma dependência, o npm vai baixar o código na pasta '/node_modules' e vai alterar o package.json e o package-lock.json com a referência da nova dependência instalada.

Você não deve alterar ou adicionar código a pasta '/node_modules' manualmente, pois ele é totalmente gerênciada pelo npm que recria e sobreescreve as depêndencias de um projeto através do comando:

```
npm install
```

Esse comando vai checar todas as depêndencias do seu projeto, reinstalar tudo aquilo que está faltando ou foi alterado.

**Nodemon**
Essa dependência é muito útil no desenvolvimento de aplicações com node, pois ele reinicia os quando os arquivos são modificados.

```
npm install -g nodemon
```
Instale ele globalmente com a flag -g e utilize o nodemon no lugar do node para rodar seus projetos.

```
nodemon index.js
```