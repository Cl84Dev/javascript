/*function tabuada(){
    let multiplicando = document.getElementById('num').value
    let multiplicador = 1
    let produto = document.getElementById('res')

    for (let r = multiplicador; r <= 10; r += 1) {
        let res = multiplicando * r
        produto.innerHTML += `<p>${multiplicando} X ${r} = ${res}</p>`
    }
}*/

function tabuada(){
    let multiplicando = document.getElementById('num')
    let multi = Number(multiplicando.value)
    let produto = document.getElementById('res')
    //produto.innerHTML = ''
    if (multiplicando.length == 0) {
        window.alert('Por favor, digite um número!')
        
    } else {
        produto.innerHTML = ''
    for (let r = 1; r <= 10; r += 1) {
        let res = multi * r
        let item = document.createElement('option')
        item.text += `${multi} X ${r} = ${res}`
        produto.appendChild(item)
    }
    
}
multiplicando.value = ''
multiplicando.focus()
}