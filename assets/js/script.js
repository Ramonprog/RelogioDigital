const relogio = setInterval(function time(){

    const hora = document.getElementById('hora')
    const minuto = document.getElementById('minuto')
    const segundo = document.getElementById('segundos')

    const dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let second = dateToday.getSeconds()

    hora.innerHTML = hr
    minuto.innerHTML = min
    segundo.innerHTML = second
   
    if(hr < 10){
        hora.innerHTML = '0' + hr
    }
    if(minuto < 10){
        minuto.innerHTML = '0' + min
    }
    if(second < 10){
        segundo.innerHTML = '0' + second
    }

})
