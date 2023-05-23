var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [codUm, qtdUm, valorunidadeUm] = pegarValores(lines.shift())
let [coddois, qtddois, valorunidadedois] = pegarValores(lines.shift())

let total= (qtdUm*valorunidadeUm)+(qtddois*valorunidadedois);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
