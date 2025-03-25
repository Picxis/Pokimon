function Inicio() {
    let username = document.getElementById('username').value;
    let clave = document.getElementById('password').value;

    if (username === 'Rodolfo' && clave === '123456') {
        console.log('Hola, bienvenido a Pokemon');
        alert('Bienvenido a Pokemon');
    } else {
        alert('Credenciales incorrectas, ingrese nuevamente');
    }
}
