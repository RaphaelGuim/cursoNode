**Process argv**
É possível acessar o processo do node que seu projeto está executando através do objeto "process" fornecido pelo Node.

Esse objeto possui a variável argv que disponibiliza os argumentos fornecidos na execução do processo

```
node index.js "Raphael"
```

```index.js
console.log(process.argv)
```

```output
[
  '/home/raphael/.nvm/versions/node/v14.6.0/bin/node',
  '/home/raphael/Documents/cursoNode/3-FileSystemCommandLine/app/index.js',
  'Raphael'
]
```
O terceiro argumento "Raphael" pode ser visto no output do objeto process.argv.

Outros argumentos podem ser fornecidos como:

```
node index.js add --title="Titulo"
```
```output
[
  '/home/raphael/.nvm/versions/node/v14.6.0/bin/node',
  '/home/raphael/Documents/cursoNode/3-FileSystemCommandLine/app/index.js',
  'add',
  '--title=Titulo'
]
```
No próximo tópico veremos como processar melhor esses argumentos utilizando a biblioteca YARGS.
https://www.npmjs.com/package/yargs.
