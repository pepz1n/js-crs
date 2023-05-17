const vetor = [12, 'string', false, 8.2];
const vetorEstatico = new Array(1000);

const vetorVazio = [];

const vetorAtividade = [2, 4, 7, -2, 1, 1000000, 44, 33, 51]

// vetorVazio.unshift(2);
vetorVazio.push('o');//0
vetorVazio.push('bernardo');//1
vetorVazio.push('é');//2
vetorVazio.push('mto');//3
vetorVazio.push('bom!');//4

// console.log('antes do shift:');

// vetorVazio.pop() // Remove o ultimo
// vetorVazio.shift(); // Remove o primeiro
// const deletado = vetorVazio.splice(1, 3) //Remove em qualquer posicao(a posicao inicial, contagem de posições)
// const parte = vetorVazio.slice(1) //Clona as posições pre definidas (A posição inicial, até onde)
// const resultado = vetorVazio.includes('Bernardo'); //Verifica se existe esse valor dentro do Array
// const teste = vetor.concat(); //concatena vetores

// function consoleLog(item) {
//   return console.log(item / 2)
// }

// vetorVazio.forEach(consoleLog)
// vetorVazio.forEach((item, i) => console.log(`O numero: ${item}, está na posição: ${i}`)); // Percorre cada item de um Array chamando uma função callback definida pelo usuario internamente
// console.log(vetorVazio);
// console.log('Remapeando');
// const vetorDividido = vetorVazio.map((item, i) => { //Remapeia um vetor e insere em outra variavel
//   return `O resultado ${item} está na posição ${i}`;
// });

// const vetorFiltrado = vetorVazio.filter((item) => item < 10) //Filtra um vetor com os dados passados

// const soma = vetorVazio.reduce((soma = 0, item) => soma += item); //Acrescenta valores os salvando em uma variavel e apos retornando-a para o sistema

// const index = vetorVazio.findIndex((item) => item == 3123); //Encontra o index do primeiro valor que corresponda aos parametros passados

// const texto = 'O bernardo é mto bom!'; // define um texto

// const vetorTexto = texto.split(''); // Transforma o texto em um vetor onde cada caractere é uma posição do Array
// vetorTexto[2] = vetorTexto[2].toUpperCase(); // Transforma o 3 caractere que se encontra na posição 2 em maiusculo

// const resultado = vetorTexto.join(''); // Transforma em texto novamente


// 1- const vetorAtividade = [2, 4, 7, -2, 1, 1000000, 44, 33, 51] Filtrar todos os valores pares do vetor.
// 2 - com o mesmo vetor remapea-lo a fim de criar um novo veto cujo tenha o texto "numero: <>, posicao: <i>"
// 3 - fazer uma sequencia fibonacci com .reduce;
