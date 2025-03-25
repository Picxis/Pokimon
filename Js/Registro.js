let usuariosRegistrados = [];

function registrarse() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
     let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden. Intenta nuevamente.");
        return;
    } if (name === '' || email === '' || username === '' || password === '' || confirmPassword === '') {
        alert("Todos los campos son obligatorios. Por favor, rellénalos.");
    }

    let usuario = {
        name: name,
        email: email,
        username: username,
        password: password 
    };

    usuariosRegistrados.push(usuario);

    alert('Registrado correctamente');
    console.log('Usuario registrado: ', usuariosRegistrados);

    location.href = '../View/login.html'
}
