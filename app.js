// Inicializamos un array para almacenar los nombres de los amigos
const amigos = [];

// Función para añadir un amigo al array
function agregarAmigo() {
    // Capturamos el valor del campo de entrada
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // Eliminamos espacios al inicio y al final

    // Validamos que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre 😀.");
        return; // Detenemos la ejecución de la función si está vacío
    }

    // Añadimos el nombre al array y actualizamos la lista visualmente
    amigos.push(nombre);
    actualizarListaAmigos();

    // Limpiamos el campo de entrada
    inputAmigo.value = "";
}

