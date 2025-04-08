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

    // Obtenemos los datos que se mostraran del usuario
    let nombre = user.nombre;
    let apellido = user.apellido;
    let nombreEntrenador = user.nombreEntrenador;

    // Actualizamos los datos con los del usuario
    document.getElementById('nombre').textContent = nombre; // Nombre del usuario
    document.getElementById('apellido').textContent = user.apellido; // Apellido del usuario
    document.getElementById('nombreEntrenador').textContent ='ID:'+ nombreEntrenador; // Nombre del entrenador
}

// Mostrar botones de juego
function OpcionesJuego() {
    let botonEmpezar = document.getElementById('btnEmpezar');
    let opcionesJuego = document.getElementById('OpcionesJuego');
    
    if (botonEmpezar && opcionesJuego) {
        botonEmpezar.style.display = 'none'; // Esconde el botón de empezar
        opcionesJuego.style.display = 'block'; // Muestra las opciones de juego
    }
}

// Configurar eventos
function cambiarBotones() {
    let botonEmpezar = document.getElementById('btnEmpezar');
    let botonBatallar = document.getElementById('btnBatallar');
    let botonEntrenar = document.getElementById('btnEntrenar');
    
    if (botonEmpezar) {
        botonEmpezar.addEventListener('click', function() {
            OpcionesJuego();
        });
    }
    
    if (botonBatallar) {
        botonBatallar.addEventListener('click', function() { 
            alert('Iniciando batalla...');
            window.location.href = "../View/Batalla.html";
        });
    }
    
    if (botonEntrenar) {
        botonEntrenar.addEventListener('click', function() {
            alert('Iniciando entrenamiento...');
            window.location.href = "../View/Entrenamiento.html"
        });
    }
}

// Llamar funciones
DatosUser();
document.addEventListener('DOMContentLoaded', function() {
    cambiarBotones();
});