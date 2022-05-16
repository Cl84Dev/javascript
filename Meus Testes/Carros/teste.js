let adicionarCarro = document.getElementById("adicionarCarro")
let excluirCarro = document.getElementById('excluirCarro')
let lista = document.getElementById("lista")
let carros = []

function verificarAdicao(adicionarCarro, carros){
    if(carros.indexOf(adicionarCarro) === -1){
        return true
    } else {
        return false
    }
}

function executarAdicionarCarro(){
    if(verificarAdicao(adicionarCarro.value, carros) && adicionarCarro.value !== ''){
        carros.unshift(adicionarCarro.value)
        lista.innerHTML = ''
        adicionarCarro.value = ''
        adicionarCarro.focus()

    for (posicaoNaArray = 0, posicaoNaLista = 1; posicaoNaArray <= (carros.length - 1); posicaoNaArray++, posicaoNaLista++){
            lista.innerHTML  += `<p><li>${posicaoNaLista} ${carros[posicaoNaArray]}</li></p>`
    }

        
    } else {
        window.alert(`Esse carro já se encontra na lista ou não é um dado válido. Por favor, adicione um carro diferente.`)
        adicionarCarro.value = ''
        adicionarCarro.focus()
    }
  
}

/*function exibirLista(){
    lista.innerHTML = ''
    for (pos = 0, num = 1; pos <= (cars.length - 1); pos++, num++){
        test.innerHTML  += `<p>${num} ${carros[pos]} </p>`
    }   
}*/

function verificarExclusao(excluirCarro, carros){
    if(carros.indexOf(excluirCarro) != -1){
        return true
    } else {
        return false
    }
}

function executarExcluirCarro(){
    if(verificarExclusao(excluirCarro.value, carros) && excluirCarro.value !== ''){   
        let idCarroExcluido = carros.indexOf(excluirCarro.value)
        carros.splice(idCarroExcluido, 1)
        lista.innerHTML = ''
        excluirCarro.value = ''
        excluirCarro.focus()

    for (posicaoNaArray = 0, posicaoNaLista = 1; posicaoNaArray <= (carros.length - 1); posicaoNaArray++, posicaoNaLista++){
        lista.innerHTML  += `<p><li>${posicaoNaLista} ${carros[posicaoNaArray]}</li></p>`
    }
    
    } else {
        window.alert('Esse carro não se encontra na lista ou não é um dado válido. Por favor, entre com um carro que está na lista.')
        excluirCarro.value = ''
        excluirCarro.focus()
    }
}