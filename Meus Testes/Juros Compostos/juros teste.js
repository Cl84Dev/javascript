let apo = 1000
let tax = 0.15
let apoc = apo * tax + apo
let tem = 30

for (let initem = 1; initem <= tem; initem ++, apoc = apoc * tax + apoc) {
    let apocbrl = apoc.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    console.log(`No fim do ${initem}° ano de investimento, você terá ${apocbrl}.`)
}