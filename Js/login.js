function Inicio() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

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
}
