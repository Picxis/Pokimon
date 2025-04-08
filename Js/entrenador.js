function DatosUser() {
    let dataUser = localStorage.getItem("user");

    if (!dataUser) {
        alert('No has iniciado sesión');
        window.location.href = "../index.html";
        return;
    }

    let user = JSON.parse(dataUser);

    let Entrenador = document.getElementById("idEntrenador");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");

    if (Entrenador) {
        Entrenador.innerHTML = "ID: " + user.nombreEntrenador;
    }
    if (nombre) {
        nombre.innerHTML = user.nombre;
    }
    if (apellido) {
        apellido.innerHTML = user.apellido;
    }
}

DatosUser();
