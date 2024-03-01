function verificar() {
    var data = new Date() //
    var ano = data.getFullYear() // Pega a data com os 4 Dígitos//
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length ==0 || fano.value > ano) {
        alert('[ERRO] verifique os dados e tente novamente!')
    }else {
        alert('tudo ok')
    }
   


}

