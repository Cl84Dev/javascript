var frutas = ['Abacaxi', 'Banana'];

console.log(frutas.length);
var primeiro = frutas[0];
primeiro
console.log(frutas[0])
if (frutas[0] == 'Maçã'){
    console.log(`${frutas[0]} é muito gostosa.`)
} else {
    console.log("Fim")
}

console.log(frutas)

for(let pos in frutas) {
    console.log(`${frutas[pos]} está na posição ${pos}.`)
}