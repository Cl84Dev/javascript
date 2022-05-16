function verif(){

    var país = window.document.getElementById('país')
    var result = window.document.getElementById('result')
    var terra = String(país.value)
    result.innerHTML = `<p>Você nasceu em <strong>${terra}</strong>.</p>`
    
    if (terra == 'Brasil'){
        result.innerHTML += `<p>Parabéns! Você é <strong>Brasileiro</strong>!!!</p>`}
        result.innerHTML += `<p>Seja bem vindo ao Brasil!!!</p>`
    }