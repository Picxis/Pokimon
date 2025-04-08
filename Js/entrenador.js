function DatosUser() {
    // Obtenemos los datos del usuario que han sido guardados en el almacenamiento local
    let dataUser = localStorage.getItem("user");

    // Si no encontramos los datos del usuario, no ha iniciado sesion y redirigimos al index
    if (!dataUser) {
        alert('No has iniciado sesión');
        window.location.href = "../index.html";
        return; // Salimos de la funcion y la devolvemos
    }

    // Convertimos los datos a formato JSON
    let user = JSON.parse(dataUser);

    // Obtenemos los datos a mostar en la pagina mediante el ID
    let Entrenador = document.getElementById("idEntrenador");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");

    //Si el dato existe, lo actualizamos en la pagina, el ID
    if (Entrenador) {
        Entrenador.innerHTML = "ID: " + user.nombreEntrenador;
    }
    //Si el dato existe, lo actualizamos en la pagina, el nombre
    if (nombre) {
        nombre.innerHTML = user.nombre;
    }
    //Si el dato existe, lo actualizamos en la pagina, el apellido
    if (apellido) {
        apellido.innerHTML = user.apellido;
    }
}
// Llamamos la funcion para ejecutarla
DatosUser();
