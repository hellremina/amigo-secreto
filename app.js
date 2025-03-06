// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (validacion(nombre)) {
        amigos.push(nombre);
        actualizarListaAmigos(amigos);
    }

    limpiarCampo();
}

function validacion(campo) {
    if (campo == '') {
        alert('Por favor, inserte un nombre');
        return false;
    }
    else
        return true;
}

function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

function actualizarListaAmigos(lista) {
    let listaHTML = document.getElementById('listaAmigos');
    let i;
    let contenido;

    listaHTML.innerHTML = ""; //limpiar elementos en 'ul' antes de mostrar la lista de amigos

    for (i = 0; i < lista.length; i++) {
        // let contenido = `<li>${lista[i]}</li>`;
        // listaHTML.innerHTML=contenido;
        contenido = document.createElement('li');
        contenido.textContent = lista[i]; //contenido.innerText
        listaHTML.appendChild(contenido);
    }

}

function sortearAmigo() {
    if (amigos == "")
        alert("Lista de amigos vacía, ingresa nombres");
    else {
        let resultadoHTML = document.getElementById('resultado');
        let indice = Math.floor(Math.random() * amigos.length);

        resultadoHTML.innerHTML = "";

        //resultadoHTML.innerHTML=amigos[indice];
        let contenido = document.createElement('li');
        contenido.textContent = amigos[indice]; //contenido.innerText
        resultadoHTML.appendChild(contenido);

    }
}