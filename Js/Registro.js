function registrarUsuario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("contrasena").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let nombreEntrenador = document.getElementById("entrenador").value;

    if (!nombre || !apellido || !email || !password || !telefono || !direccion || !nombreEntrenador) {
        alert("Por favor completa todos los campos");
        return;
    }

    if (password.length < 4) {
        alert("La contraseña debe tener al menos 4 caracteres");
        return;
    }

    if (telefono.length > 10) {
        alert("Número de teléfono inválido");
        return;
    }

    let usuario = {
        nombre,
        apellido,
        email,
        password,
        telefono,
        direccion,
        nombreEntrenador
    };

    let usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
    usuariosRegistrados.push(usuario);
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));

    alert("Usuario registrado correctamente");
    console.log("Usuario registrado correctamente: ", usuariosRegistrados);

    window.location.href = "../View/login.html"; 
}
