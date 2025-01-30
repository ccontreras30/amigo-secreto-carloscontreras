//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("nombre");
    const btnAdicionar = document.getElementById("adicionar");
    const btnSortear = document.getElementById("sortear");
    const listaNombres = document.getElementById("lista");
    const resultado = document.getElementById("resultado");
    
    let amigos = []; // Usar un arreglo explícitamente

    btnAdicionar.addEventListener("click", () => {
        const nombre = inputNombre.value.trim();
        if (nombre === "") {
            alert("Por favor, inserte un nombre");
            return;
        }
        amigos.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    });

    btnSortear.addEventListener("click", () => {
        if (amigos.length === 0) {
            alert("La lista está vacía. Agregue amigos antes de sortear.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        document.getElementById("resultado").innerHTML = `<strong>El amigo sorteado es:</strong> ${amigos[indiceAleatorio]}`;
    });

    function actualizarLista() {
        listaNombres.innerHTML = "";
        for (let i = 0; i < amigos.length; i++) {
            const li = document.createElement("li");
            li.textContent = amigos[i];
            listaNombres.appendChild(li);
        }
    }
});

