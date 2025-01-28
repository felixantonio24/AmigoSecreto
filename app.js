// Inicializamos un array para almacenar los nombres de los amigos
const amigos =[];

//funcion para usar el array 
function agregarAmigo(){

    const inputAmigo = document.querySelector("#amigos");
    //elimina espacios en el inicio y el final
    const nombre = inputAmigo.ariaValueMax.trim(); 
    //busco que el campo no este vacio 
    if(nombre===""){
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
function actualizarListaaAmigos (){
    const listaAmigos = DocumentFragment.querySelector("#listaAmigos");
    //limpio la lista actual
    listaAmigos.innerHTML = "";
}