// Inicializamos un array para almacenar los nombres de los amigos
const amigos =[];
//funcion para usar el array 
function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    //elimina espacios en el inicio y el final
    const nombre = inputAmigo.value.trim(); 
    //busco que el campo no este vacio 
    if(nombre === ""){
        alert("Por favor, inserte un nombre 😀");
        return;
    }
    //añado el nombre a arrai para q se actualize la lista 
    amigos.push(nombre);
    actualizarListaaAmigos();
    //Limpio el campo de entrada
    inputAmigo.value = "";
}
//funcion para actualizar la lista visual de amigos
function actualizarListaaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    //limpio la lista actual
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    //valido que no alkguien en el array
    if (amigos.length === 0) {
        alert("🫡No hay amigos disponibles para sortear.😀");
        return;
    }
    //genero el nombre sorteado 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];//obtengo el aleatorio
    //muestrpresultados
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
    // esto puse para que no solo acepte con el click de añadir si no que tambien con la tecla enter ya que la personas que haga ek sorteo podia presionar 
const inputAmigo = document.getElementById("amigo");
inputAmigo.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});


    



