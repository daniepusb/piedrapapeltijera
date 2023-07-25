let elegidos = 0;
let nombre__ganador = '';

function jugar(e){
    console.log('function jugar');
    //mostrar div id=jugadores
    document.getElementById('jugadores').style.display = 'grid';
    document.getElementById('boton_jugar').style.display = 'none';
};

function elegir(id){
    console.log('function elegir id: '+ id);
    if (id == 'a') {
        document.getElementById('eleccion_a').style.display = 'grid';
        document.getElementById('opciones_a').style.display = 'none';
        elegidos +=1;
    }else{
        document.getElementById('eleccion_b').style.display = 'grid';
        document.getElementById('opciones_b').style.display = 'none';
        elegidos +=1;
    }
    if (elegidos == 2){
        document.getElementById('resultado').style.display = 'block';
    }
}

function calcular__ganador(){
    console.log('funcion calcular__ganador');
    document.getElementById('ver_ganador').style.display = 'none';

    //saber que eleigio A
    let nodos__elegidos__a = document.getElementsByName('eleccion__a');
    let opcion__a = '';
    for (let opcion of nodos__elegidos__a) {
        if (opcion.checked) { opcion__a = opcion.id}
    }
    
    //saber que eleigio B
    let nodos__elegidos__b = document.getElementsByName('eleccion__b');
    let opcion__b = '';
    for (let opcion of nodos__elegidos__b) {
        if (opcion.checked) { opcion__b = opcion.id}
    }
    
    //comparar A y B
    console.log(opcion__a, opcion__b)

    if (opcion__a == opcion__b) {
        //empate
        nombre__ganador = 'ninguno, es un empate';
    }else if(opcion__a == 'piedra' && opcion__b == 'tijera'
    || opcion__a == 'tijera' && opcion__b == 'papel' || opcion__a == 'papel' && opcion__b == 'piedra' ){
        //gana A
        nombre__ganador = 'A';
    }else if(opcion__b == 'piedra' && opcion__a == 'tijera'
    || opcion__b == 'tijera' && opcion__a == 'papel' || opcion__b == 'papel' && opcion__a == 'piedra' ){
        //gana B
        nombre__ganador = 'B';
    }
    console.log(nombre__ganador);

    //mostrar nombre de ganador
    document.getElementById('nombre_ganador').innerHTML = nombre__ganador;
    document.getElementById('ganador').style.display = 'block';
}

function reiniciar__juego(){
    location.reload();
}