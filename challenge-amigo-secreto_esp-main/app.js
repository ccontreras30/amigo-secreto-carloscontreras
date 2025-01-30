//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// Obtener el elemento de la lista
const listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo() {
    const nombreInput = document.getElementById('nombre');
    const nombre = nombreInput.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Actualizar la lista visual
    actualizarLista();

    // Limpiar el campo de entrada
    nombreInput.value = "";
}

function actualizarLista() {
    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo amigos y agregar elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    if (amigos.length < 2) {
        alert("Añade al menos dos amigos para realizar el sorteo.");
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    const amigosSorteados = [...amigos];
    for (let i = 0; i < amigos.length; i++) {
        // Generar un índice aleatorio
        let index;
        do {
            index = Math.floor(Math.random() * amigosSorteados.length);
        } while (index === i); // Asegurar que no se asigne a sí mismo
        
        // Obtener el nombre sorteado y mostrar el resultado
        const li = document.createElement('li');
        li.textContent = `${amigos[i]} es amigo secreto de ${amigosSorteados[index]}`;
        resultado.appendChild(li);
        amigosSorteados.splice(index, 1);
    }
} 
