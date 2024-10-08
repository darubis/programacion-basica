let ataqueJugador

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);

    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);

    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);
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

    seleccionarMascotaEnemigo();
}


function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

    if(ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'hipodoge';
    }else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'capipepo';
    }else {
        spanMascotaEnemigo.innerHTML = 'ratigueya';
    }
}


function ataqueFuego(){
    ataqueJugador = 'fuego';
    alert(ataqueJugador)
}


function ataqueAgua(){
    ataqueJugador = 'agua';
    alert(ataqueJugador)

}


function ataqueTierra(){
    ataqueJugador = 'tierra';
    alert(ataqueJugador)
}


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


window.addEventListener('load', iniciarJuego)