// Exercicio 1 - Decisão
// Dado que tenho o valor de uma compra, o metodo de pagamento e o frete a ser pago.
// Faça uma estrutura onde:

// Se o valor da compra for maior que 200 e o metodo de pagamento for dinheiro, o frete seja gratis
// Se o valor da compra for maior que 200 e o metodo de pagamento for cartão, o frete seja de 20 reais
// Se o valor da compra for menor ou igual a 200 e o metodo de pagamento for dinheiro, o frete seja de 30 reais
// Se o valor da compra for menor ou igual a 200 e o metodo de pagamento for cartão, o frete seja de 50 reais

// Imprima na tela o valor da compra, metodo de pagamento e o valor do frete.

const compra = 190;
const pagamento = "cartao";
let frete = 0;

if(compra > 202 ){
    if(pagamento == "dinheiro" )
        frete = 0;    
    if (pagamento == "cartao")
        frete = 20;
};

if(compra <= 200 ){
    if(pagamento == "dinheiro" )
        frete = 30; 
    if (pagamento == "cartao")
        frete = 50;
};

console.log("O valor da compra é : ", compra);
console.log("O pagamento foi em : ", pagamento);
console.log("O valor do frete fica em : ", frete);


// ==============================================

// Exercicio 2 - Estrutura de repetição

// Percorrer uma lista de nomes, contendo os nomes:
// Eduardo, Maria, Fernando, Joao e Francisco
// Numero da execução, começando em 1
// Nome que está sendo executado
// Separadores

// Execução: 1
// Nome: Eduardo
// -------------------
const nomes = ["Eduardo", "Maria", "Fernando", "Joao", "Francisco"];

nomes.forEach((nome, index)=> {
    let i = 0; nomes.length <= i; i++; index++;
    console.log("Execução: ", index++);
    console.log("Nome: " , nome);    
});


// Exercicio 3 - Estrutura de repetição e decisão

// Percorrer uma lista de cidades, contendo as cidades:
// Florianópolis, São Paulo, Recife, Salvador, Rio de Janeiro, Porto Alegre, Teresina
// Quando encontrar a cidade Salvador, pare a execução, e diga em que posição está

const cidades = ["Florianópolis", "São Paulo", "Recife", "Salvador", "Rio de Janeiro", "Porto Alegre", "Teresina"];

cidades.forEach((cidade, index) => {
    if (cidade === "Salvador") {
        console.log("Achei a cidade de Salvador na posição: ", index + 1);
    }

})

// =====================================================

// Exercicio 4 - Funções
// Criar uma função
// Que soma 2 numeros e retorna esses numero somado
// Deve ser envgiado por parametros os 2 numeros da conta

function Soma(numero1 , numero2){
    return numero1 + numero2;
}
console.log("A soma dos dois numeros é:",Soma(4,6));