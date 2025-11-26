// Exercicio 1

// Dado a lista de cidades:
 const cidades = ['Rio de Janeiro', 'Belo Horizonte', 'São Paulo', 'Porto Alegre', 'Florianópolis'];

// Imprima a primeira cidade

console.log("A a primeira cidade é: ", cidades[0]); // rio de janeiro
console.log("-----------------------")

// Imprima a segunda cidade
console.log("A a segunda cidade é: ", cidades[1]); // belo horizonte
console.log("-----------------------") ;

// Adicione uma cidade no inicio
cidades.unshift('Curitiba');
console.log("A cidade adicionada no início foi: ", cidades[0]); // curitiba
console.log("-----------------------")

// Imprima a primeira cidade
console.log("A a primeira cidade é: ", cidades[0]); // curitiba
console.log("-----------------------");

// Adicione uma cidade no final
cidades.push('Ribeirão Preto');
console.log("A cidade adicionada no final foi: ", cidades[cidades.length - 1]); // ribeirão preto
console.log("-----------------------");

// Imprima a ultima cidade

console.log("A ultima cidade é: ", cidades[cidades.length - 1]); // ribeirão preto
console.log("-----------------------") ;

// Obs: sempre informe o que está imprimindo


// Exercicio 2

// Em uma lista de nomes, onde tenho:
const nomes = ['Eduardo', 'Maria', 'José', 'Fernanda', 'Pedro'];
console.log("-----------------------");
// Percorra a lista de nomes e imprima um a um

nomes.forEach((nome, index) => {
  console.log(index, "-", nome);
});
console.log("-----------------------");