function DatosUser() {
    // Agarramos los datos del usuario que están guardados en el almacenamiento local
    let dataUser = localStorage.getItem("user");

    // Si no hay datos del usuario, significa que no ha iniciado sesión, así que lo mandamos al inicio
    if (!dataUser) {
        alert('No has iniciado sesión');
        window.location.href = "../index.html";
        return; // Salimos de la función
    }

    // Convertimos los datos guardados en texto a un formato que podamos usar (JSON)
    let user = JSON.parse(dataUser);

    // Sacamos los datos del usuario que queremos mostrar
    let nombre = user.nombre;
    let apellido = user.apellido;
    let nombreEntrenador = user.nombreEntrenador;

    // Cambiamos el contenido de los elementos en la página con los datos del usuario
    document.getElementById('nombre').textContent = nombre; // Ponemos el nombre del usuario
    document.getElementById('apellido').textContent = apellido; // Ponemos el apellido del usuario
    document.getElementById('nombreEntrenador').textContent = 'ID:' + nombreEntrenador; // Ponemos el nombre del entrenador
}

// Mostramos los botones del juego
function OpcionesJuego() {
    let botonEmpezar = document.getElementById('btnEmpezar');
    let opcionesJuego = document.getElementById('OpcionesJuego');
    
    if (botonEmpezar && opcionesJuego) {
        botonEmpezar.style.display = 'none'; // Escondemos el botón de empezar
        opcionesJuego.style.display = 'block'; // Mostramos las opciones del juego
    }
}

// Configuramos los eventos de los botones
function cambiarBotones() {
    let botonEmpezar = document.getElementById('btnEmpezar');
    let botonBatallar = document.getElementById('btnBatallar');
    let botonEntrenar = document.getElementById('btnEntrenar');
    
    if (botonEmpezar) {
        botonEmpezar.addEventListener('click', function() {
            OpcionesJuego(); // Cuando le den clic, mostramos las opciones del juego
        });
    }
    
    if (botonBatallar) {
        botonBatallar.addEventListener('click', function() { 
            alert('Iniciando batalla...'); // Avisamos que empieza la batalla
            window.location.href = "../View/Batalla.html"; // Mandamos a la página de batalla
        });
    }
    
    if (botonEntrenar) {
        botonEntrenar.addEventListener('click', function() {
            alert('Iniciando entrenamiento...'); // Avisamos que empieza el entrenamiento
            window.location.href = "../View/Entrenamiento.html"; // Mandamos a la página de entrenamiento
        });
    }
}

// Llamamos a la función para mostrar los datos del usuario
DatosUser();

// Cuando la página termine de cargar, configuramos los botones
document.addEventListener('DOMContentLoaded', function() {
    cambiarBotones();
});