function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    //var data = new Date()
    //var hora = data.getHours()
    var hora = 21
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora <12){
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#fa9d1b'

    } else if (hora >= 12 && hora <18){
        // BOA TARDE!
        img.setAttribute('src', 'fototarde.png')
        document.body.style.background = '#c7570a'

    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#6b5686'

    }
}

