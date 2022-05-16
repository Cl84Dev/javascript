let num = [2, 5, 1, 3, 4]
num.sort()

num.length //retorna a quantidade de variáveis no vetor
/*num.sort() //ordena o conteúdo das variáveis em ordem crescente
num.push(0) //adiciona o valor de uma variável na última posição


console.log(valores) //retorna todos os valores atribuídos às variáveis
console.log(`A quantidade de variáveis é ${num.length}`)
console.log(`A variável 4 é ${num[4]}`)
console.log(`O valor da variável que acrescentamos é ${num[5]}`)*/

/*for(let pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}*/ //Essa expressão for pode ser feita da forma abaixo quando se usa arrays.

/*for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}*/

console.log(num.indexOf(3))
console.log(num[4])