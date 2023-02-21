function suma(a, b) {
    return a + b;
  }
  
  function multiplica(a, b) {
    return a * b;
  }
  
  module.exports = { suma, multiplica };

  const { suma, multiplica } = require('./controller');
const chalk = require('chalk');

const resultado = multiplica(suma(1, 2), suma(4, 5));

console.log(chalk.green(resultado));