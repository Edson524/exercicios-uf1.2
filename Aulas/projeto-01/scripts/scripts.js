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


const morada = "Tarrafal"; //string

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