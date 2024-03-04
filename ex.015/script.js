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
                img.setAttribute('src', 'meninobb.png')
            } else if  (idade < 21) {
                //Adulto
                img.setAttribute('src', 'adolescenteG.png')
            } else if  (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }

        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade <10) {
                // Criança
                img.setAttribute('src', 'meninabb.png')
            } else if  (idade < 21) {
                //Adulto
                img.setAttribute('src', 'adolescenteM.png')
            } else if  (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulheadulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade } anos. `
        res.appendChild(img) 
        
    }
   


}

