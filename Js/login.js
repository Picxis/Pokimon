function Inicio() {

// Capturamos los datos que el usuario ha ingresado en los campos de correo y contraseña en el regstro
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

// Tratamos de obtener la lista de usuarios registrados desde el almacenamiento local
let usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

// Ahora buscamos si existe un usuario en el almacenamiento local
let usuarioEncontrado = usuariosRegistrados.find(function(usuario) {
    return usuario.email === email && usuario.password === password;
});

// Si no encontramos un usuario con esas credenciales, mostramos una alerta y redirigimos al usuario a la página de inicio de sesion
    if (!usuarioEncontrado) {
        alert('Las credenciales son incorrectas');
        window.location.href = "../View/login.html";
    } else {
    // Si encontramos el usuario, lo guardamos en el almacenamiento local
        localStorage.setItem("user", JSON.stringify(usuarioEncontrado));
    // Mostramos un mensaje diciendo que el usuario es válido.
        alert('Usuario válido');
    // Redirigimos al usuario al perfil
        window.location.href = "../View/entrenador.html";
    }
}

