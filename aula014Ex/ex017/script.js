function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 11
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora <= 12) {
        //BOM DIA
        img.src = 'imagens/manhã.png'
        document.body.style.body = '#fbce86'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.body = '#92a5b9'
    } else {
        //BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.body = '#fd8f95'
    }


}

