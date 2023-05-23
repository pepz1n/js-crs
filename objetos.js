let Bernardo = {
  idade: 18,
  endereco: {
    rua: 'Ricardo Panizzi'
  }
};


Bernardo.idade = 21


Bernardo.curso = 'C.C'



let pessoas = {
    nome: 'Bernardo',
    idade: 18,
    endereco: [
      {
        Rua: 'ricardo panizzi'
      }
    ],
  }



let objeto = {
  nome: 'algo',
  idade: 21
};

const string = JSON.stringify(objeto);

const voltou = JSON.parse(string);


// Object.keys(objeto).forEach((chave) => console.log(`A chave ${chave} tem o valor ${objeto[chave]}`))

for (let valor in objeto) {
  // console.log(valor);
}

const valores = Object.values(objeto);
console.log(valores);
