function registrarse() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden. Intenta nuevamente.");
        return;
    }

    alert('Registrado correctamente');
    console.log(name, email, username, password, confirmPassword);
}