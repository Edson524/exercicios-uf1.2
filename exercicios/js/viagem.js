const origem = "Praia (Santiago)";
const destino = "São Filipe (Fogo)";
const precoBilhete = 3500;
let passageiros = 2;
let lugaresLivres = 120;
let temCamarote = false;
let numeroLugar;
const observacoes = null;




// 2. Os tipos
console.log(typeof origem);
console.log(typeof destino);
console.log(typeof precoBilhete);
console.log(typeof passageiros);
console.log(typeof lugaresLivres);
console.log(typeof temCamarote);
console.log(typeof numeroLugar);
console.log(observacoes);


// 3. O bilhete
let total = precoBilhete * passageiros;
lugaresLivres = lugaresLivres - passageiros;
numeroLugar = 27;


console.log(`Viagem: ${origem} -> ${destino}`);
console.log(`Passageiros: ${passageiros}`);
console.log(`Lugar: ${numeroLugar}`);
console.log(`Camarote: ${temCamarote}`);
console.log(`Total: ${total} escudos`);
console.log(`Lugares livres no barco: ${lugaresLivres}`);


// 4. Mais um passageiro
passageiros = passageiros + 1;
total = precoBilhete * passageiros;
lugaresLivres = lugaresLivres - 1;


console.log(`Com ${passageiros} passageiros, o total é ${total} escudos.`);
console.log(`Lugares livres no barco: ${lugaresLivres}`);

