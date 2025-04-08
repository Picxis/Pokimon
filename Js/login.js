function Inicio() {

    /*Capturamos datos para poder validar el inicio de sesion*/
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    /*Obtenemos los usuarios registrados del array creado y si no hay nada pone un espacio vacio por defecto*/
    let usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

    /* Busca dentro del array de usuariosRegistrados uno que coincida con los datos ingresados*/
    let usuarioEncontrado = usuariosRegistrados.find(function(usuario) {
        return usuario.email === email && usuario.password === password;
    });

    if (!usuarioEncontrado) {
        alert('Las credenciales son incorrectas');
        window.location.href = "../View/login.html";
    } else {
        localStorage.setItem("user", JSON.stringify(usuarioEncontrado));
        alert('Usuario válido');
        window.location.href = "../View/entrenador.html";
    }
} Inicio()
