function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "hipodoge";
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "capipepo";
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "ratigueya";
    }else{
        alert('no has seleccionado una mascota')
    }
}


window.addEventListener('load', iniciarJuego)