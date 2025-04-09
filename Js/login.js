function Inicio() {
    // Agarramos lo que el usuario escribió en los campos de correo y contraseña
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Buscamos si ya hay usuarios guardados en el almacenamiento del navegador
    let usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

    // Revisamos si hay un usuario que tenga el mismo correo y contraseña
    let usuarioEncontrado = usuariosRegistrados.find(function(usuario) {
        return usuario.email === email && usuario.password === password;
    });

    // Si no encontramos a nadie con esos datos, mostramos un mensaje y mandamos al usuario al login
    if (!usuarioEncontrado) {
        alert('Las credenciales son incorrectas');
        window.location.href = "../View/login.html";
    } else {
        // Si encontramos al usuario, lo guardamos en el almacenamiento del navegador
        localStorage.setItem("user", JSON.stringify(usuarioEncontrado));
        // Mostramos un mensaje diciendo que todo está bien
        alert('Usuario válido');
        // Mandamos al usuario a su perfil
        window.location.href = "../View/entrenador.html";
    }
}
