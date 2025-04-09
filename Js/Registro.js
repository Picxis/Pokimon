function registrarUsuario() {
    // Agarramos lo que el usuario escribió en los campos de registro
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("contrasena").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let nombreEntrenador = document.getElementById("entrenador").value;

    // Revisamos si el usuario llenó todos los campos
    if (!nombre || !apellido || !email || !password || !telefono || !direccion || !nombreEntrenador) {
        alert("Por favor completa todos los campos");
        return;
    }

    // Revisamos que la contraseña tenga al menos 4 letras o números
    if (password.length < 4) {
        alert("La contraseña debe tener al menos 4 caracteres");
        return;
    }

    // Revisamos que el número de teléfono no sea más largo de 10 números
    if (telefono.length > 10) {
        alert("Número de teléfono inválido");
        return;
    }

    // Guardamos todos los datos del usuario en una lista
    let usuario = {
        nombre,
        apellido,
        email,
        password,
        telefono,
        direccion,
        nombreEntrenador
    };

    // Buscamos si ya hay usuarios guardados en la pc, si no hay, empezamos con una lista vacía
    let usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

    // Metemos al nuevo usuario en la lista
    usuariosRegistrados.push(usuario);

    // Guardamos la lista de usuarios en la pc
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));

    // Avisamos que el usuario se registró bien
    alert("Usuario registrado correctamente");

    // Mostramos en la consola para revisar que todo esté bien
    console.log("Usuario registrado correctamente: ", usuariosRegistrados);

    // Mandamos al usuario a la página de login
    window.location.href = "../View/login.html"; 
}
