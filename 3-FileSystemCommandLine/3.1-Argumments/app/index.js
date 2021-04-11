const chalk = require("chalk")
const command = process.argv[2]

console.log(chalk.blue.inverse("Index.js"))
console.log(process.argv)

const action ={
    add : function(){
        console.log("Adding Note")
    },
    remove : function(){
        console.log("Removing Note")
    }
}[command];

if(typeof action == 'function'){
    action()
}
else{
    console.log(chalk.red("Invalid Action - ",command))
}
