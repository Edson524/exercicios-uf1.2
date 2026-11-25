/* 
    variaveis:
       - let
       - cost
*/
let nome = "Edson"; //string
let idade = 21; //number
let estaPresente = true; //boolean
let altura = 1.75; //number float
let nota; //undefined
let media = null; //valor intencional de vazio


const morada = "Tarrafal"; //string hh

nome = "Monts";
idade = 22;


console.log("Meu nome e: " + nome, "minha idade:" + idade);
console.log("Minha morada e:" + morada);
console.log(nome, idade);
console.log(typeof nota); //tipo de dados na variavel nome


let nomCafe = "capuccino";
let preco = 250;
let quantidade = 3;

let resposta = prompt("Quantos capuccinos desejas pedir");
quantidade = parseInt(resposta);
let total = preco * quantidade;

console.log(nome + " Pediu " + quantidade + " " + nomCafe);
console.log("O valor total e de " + total + " escudos");

//====================================================================
// Aula 2 - Operadores e Estruturas de Controlo
//A Caixa do Café Morabeza
//====================================================================

const aluno = "Leandro"
console.log(`O nome do aluno e: ${aluno}`); // o nnome do aluno e: Leandro

const precoCafe = 80;
const precoCapuccino = 50;
console.log(`A soma dos doi e: ${precoCafe + precoCapuccino}`);
console.log(`: ${precoCapuccino - precoCafe}`);
console.log(`O preco de tres cafes e: ${precoCafe * 3}`);
console.log(`Black Friday preco e pela metade: ${precoCafe / 2}`);
console.log(`Resto da divisao: ${precoCafe % 2}`);
console.log(`Exponencial: ${precoCafe ** 2}`);

let caixa = 0;
let poteGorjeta = 0;

//vendi um cafe
caixa += precoCafe; // caixa = caixa + precoCafe
poteGorjeta += precoCafe * 0.1; // poteGorgeta + precoCafe * 0.1

//vendi um capuccino
caixa += precoCapuccino; // caixa = caixa + precoCafe
caixa -= precoCafe * 0.1; // caixa = caixa - precoCafe *0.1

poteGorjeta /= 2;

console.log(`o valor atual da caixa e: ${caixa}`);

let numClientes = 0;
// ++ incrementa (adiciona) mais 1 sobre o valor atual
// -- decrementa (subtrai) mais 1 do valor atual


// entro um cliente novo
numClientes++; //adiciona mais 1 sobre o nº de clientes // era 0 e ficou 1
//entrou mais um cliente
numClientes++; //adiciona mais 1 sobre o nº de clientes // era 1 e ficou 2

//saui um cliente
numClientes--; // subtrai 1 do numero de clientes //eram 2 e ficou 1

console.log(`o nº atual de clientes e: ${numClientes}`);

//operadores de comparacao

//vereficar se o preco de cafe e maior do que 100, se for dou u bonos de 10% de gorjeta
console.log(precoCafe > precoCapuccino);//true
console.log(precoCapuccino > precoCafe);//false


// verifica se o valor do caixa atual e maior do que 100, se for dou um bonos de 10% de gorjeta

console.log(caixa > 100); //true

//calculo de troco da venda de um cafe
let valorPago = 200;0
console.log(valorPago > precoCafe)//true
console.log(`o troco e de: ${valorPago - precoCafe}`);

//calculo de troco ma venda de um cafe
let valorPago2 = 50;
console.log(valorPago === precoCapuccino)//true
console.log(`O troco e de: ${valorPago2 - precoCapuccino}`);

//----------------------------------------------------------------------------
//-----------Operadores logicos-----------------------------------------------
//----------------------------------------------------------------------------

//E -> &&    
// condicao 1 && condicao 2   true if both are true

//Ou -> ||
// condicao 1 || conticao 2   true if at least one is true 

const temCartao = true;
const cafesPedidos = 6;

console.log(temCartao && cafesPedidos >=5);// true se as duas forem verdadeiras
console.log(temCartao || cafesPedidos >=10);// true se pelomenos um for verdadeiro
console.log(!temCartao);//  false: o contrario

const idades = 8;
const genero = "m";

console.log(idades >= 18 && genero === "m");
console.log(10 > 5 && 10 > 14);

const temCartaoFidelidade = true;
const temCupomDesconto = false;

console.log(temCartaoFidelidade || temCupomDesconto);
console.log(!temCartaoFidelidade);

//-----------------------------------------------------------------------------
//-----------Estruturas de Controlo--Decisores---------------------------------
//-----------------------------------------------------------------------------

if (idades >= 18) {
  console.log("E maior de Idade");
} else {
  console.log("Nao e maior de Idade");
}

if (idades >= 18 && genero === "m") {
  console.log("El e maior e matxo");
} else if (idades >= 18 && genero === "f") {
  console.log("El e maior e Femia");
} else {
  console.log("Se louco nao compesa");
}

const nacionalidade = "cv";
switch (nacionalidade) {
  case "cv":
    console.log("Kualeh nha mano");
    break;
  case "Portugal":
    console.log("Como estas irmao");
    break;
  case "Guine":
    console.log("Eh cuman de corpo");
    break;
  case "Senegal":
    console.log("Na nga def");
    break;
  default:
    console.log("agh kz mo stou???");
}

console.log("7" + 3);

for (let i = 1; i <= 5; i++){
    console.log(`cliente numero ${i}`)
}

let precoTemp = 90;
for(let quantidade = 1; quantidade <=5; quantidade++) {
    console.log(`${quantidade} cafes custam : ${precoTemp * quantidade}`)
}

for (let i = 10; i >=0; i--){
    console.log(`tempo restante : ${i} segundos`)
}


const precoMoinho = 5000;
const poupancaDiaria = 100;
let totalPoupado = 0;
let dia = 1;
while (totalPoupado <= precoMoinho){
    totalPoupado += poupancaDiaria;
    dia++
    console.log(`Demorou ${dia} dias`);
    console.log(`Foi poupado ${totalPoupado} escudos`);

b}