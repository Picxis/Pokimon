let usuariosRegistrados = [];

function registrarse() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let array = {
        name: name,
        email: email,
        username: username,
        password: password 
    };

    usuariosRegistrados.push(array);

    alert('Registrado correctamente');
    console.log('Usuario registrado: ', usuariosRegistrados);

    location.href = '../View/login.html';
    return;
}
