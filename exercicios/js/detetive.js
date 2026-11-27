const nomeLoja = "Mercearia da Tia Lena";
let produto = "Arroz";
let precoQuilo = 150;
let quilos = precoQuilo * 2;

console.log(`${nomeLoja}: ${produto} a ${precoQuilo} escudos o quilo.`);
// Erro 1: ReferenceError: nomeProduto is not defined
// Erro 2: ReferenceError: PrecoQuilo is not defined

let stock = 40; // Erro 3: TypeError: Assignment to constant variable.
stock = stock - 5;
console.log(`Ficaram ${stock} sacos de arroz.`);

let quantidade = 3; // Erro 4: "3" era uma string.
let total = precoQuilo * quantidade; // Erro 5: Operador incorreto (+).
console.log(`3 quilos custam ${total} escudos.`);

let emPromocao = false; // Erro 6: Mostrava "string" em vez de "boolean".
console.log(typeof emPromocao);