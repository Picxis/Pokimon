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
}

