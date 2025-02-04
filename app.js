//Declaramos las variables
let amigos = [];

//Funcion para el ingreso de los nombres en la lista
function agregarAmigo(){
    let input = document.getElementById('amigo');
    let nombre = input.value.trim()
    //Validamos si el campo esta vacio
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return; 
    }
    //Añadimos el nombre ingresado
    amigos.push(nombre);
    actualizarLista();
    input.value = '';
}

//Creamos la función que actualiza la lista de nombres.
function actualizarLista () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ('');
    //Recorremos el array usando el metodo forEach y creamos un <li> para cada nombre
    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//Creamos la función para sortear el amigo secreto

function sortearAmigo(){
    //Verificamos si hay amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista.')
        return;
    }
    //Generamos un indice aleatorio.
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);
    //Obtenemos el nombre sorteado
    let amigoSorteado  = amigos[amigoAleatorio];
    //Mostramos el resultado en pantalla
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> ${amigoSorteado}</li>`;
    
}