function Inicio() {
    let id = document.getElementById('id').value;
    let username = document.getElementById('username').value;
    let clave = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let age = document.getElementById('age').value;
    let favoriteGame = document.getElementById('favoriteGame').value; 
    let gamingPlatform = document.getElementById('gamingPlatform').value;
    let favoriteGenre = document.getElementById('favoriteGenre').value;
    let gamerTag = document.getElementById('gamerTag').value;

    if (
        username === 'Rodolfo' && clave === '123456' && email === 'rodolfo@gmail.com' && phone === '1234567890' && age === '18' &&  favoriteGame === 'Pokemon' &&  gamingPlatform === 'PC' &&  favoriteGenre === 'RPG' &&  gamerTag === 'RodolfoGamer' && id === '1' // Corregir 'Pokimon' a 'Pokemon'
    ) {
        console.log('Hola, bienvenido a Pokemon');
        alert('Bienvenido a POKIMON');
    } else {
        alert('Credenciales incorrectas, ingrese nuevamente');
    }
}
