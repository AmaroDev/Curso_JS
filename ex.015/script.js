function verificar() {
    var data = new Date() //
    var ano = data.getFullYear() // Pega a data com os 4 Dígitos//
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length ==0 || fano.value > ano) {
        alert('[ERRO] verifique os dados e tente novamente!')
    }else {
        var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML= `Idade calculada: ${idade}`//
        var  gênero = ''
        if (fsex[0].checked) {
            gênero  = 'homem'

        }else if (fsex[1].checked) {
            gênero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        
    }
   


}

