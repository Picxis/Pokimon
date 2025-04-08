function registrarUsuario() {
    // Capturamos los datos que el usuario ingresa en los campos de registro
let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let email = document.getElementById("email").value;
let password = document.getElementById("contrasena").value;
let telefono = document.getElementById("telefono").value;
let direccion = document.getElementById("direccion").value;
let nombreEntrenador = document.getElementById("entrenador").value;

// Comprobamos si todos los campos fueron completados
    if (!nombre || !apellido || !email || !password || !telefono || !direccion || !nombreEntrenador) {
        alert("Por favor completa todos los campos");
        return;
    }

// Verificamos que la contraseña tenga al menos 4 caracteres
    if (password.length < 4) {
        alert("La contraseña debe tener al menos 4 caracteres");
        return;
    }

// Comprobamos que el número de teléfono no tenga más de 10 dígitos
    if (telefono.length > 10) {
        alert("Número de teléfono inválido");
        return;
    }

// Creamos un array que guarda todos los datos del usuario que se registro
let usuario = {
    nombre,
    apellido,
    email,
    password,
    telefono,
    direccion,
    nombreEntrenador
};

    // Traemos la lista de usuarios registrados que tenemos guardada en el almacenamiento local y si no hay usuarios queda vacio
let usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

    // Añadimos el nuevo usuario a usuariosRegistrados
usuariosRegistrados.push(usuario);

    // Guardamos en el almacenamiento local
localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));

    // Mostramos un mensaje indicando que el usuario fue registrado correctamente.
alert("Usuario registrado correctamente");

    // Imprimimos en la consola para que todo este correctamente
console.log("Usuario registrado correctamente: ", usuariosRegistrados);

    // Redirigimos al usuario al login
window.location.href = "../View/login.html"; 
}
