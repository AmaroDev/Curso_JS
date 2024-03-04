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
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero  = 'homem'
            if(idade >=0 && idade <10) {
                // Criança
            } else if  (idade < 21) {
                //Adulto
            } else {
                //Idoso
            }

        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade <10) {
                // Criança
            } else if  (idade < 21) {
                //Adulto
            } else {
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        
    }
   


}

