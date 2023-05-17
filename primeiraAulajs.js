const minhaConst = 123; //Const so pode Receber Uma Vez

var minhaVar = 9.2
// console.log(minhaVar);
var minhaVar = 'oi'
// console.log(minhaVar);


let minhaLet = 9.2
// console.log(minhaLet);
minhaLet = '9.2'
// console.log(minhaLet);




let numeroString = '9';
let numeroNormal = 9;

console.log(typeof numeroString);

if (numeroNormal !== numeroString) {
  // console.log(true);
} else {
  // console.log(false);
}

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

var i = 0
while (i < 10) {
  i++
}
var i = 'dbaidhausd'
// do {

// } while (i < 10);

// console.log('O estudante:', i , 'é um gênio.');
// console.log(`O estudante: ${i}!`);

function retornaODobro (numero = 0) {
  return numero * 2;
}

const retornaODobro = (numero = 0) => numero * 2;

// console.log(retornaODobro(2))

const raiz = (numero) => Math.sqrt(numero)

console.log(raiz(4));
console.log(raiz(1));
console.log(raiz(9));
console.log(raiz(64));

