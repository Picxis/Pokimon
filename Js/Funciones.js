// Variables globales para guardar el estado del juego
let myPokimon; // Aquí guardamos los datos de nuestro Pokimon
let enemyPokimon; // Aquí guardamos los datos del Pokimon enemigo
let isEvolved = false; // Esto nos dice si nuestro Pokimon ya evolucionó

// Cuando la página carga, hacemos varias cosas
window.onload = function() {
    // Sacamos los datos guardados en el navegador
    const selectedPokimon = localStorage.getItem('selectedPokimon');
    const enemyPokimonData = localStorage.getItem('enemyPokimon');

    // Convertimos esos datos en algo que podamos usar
    myPokimon = JSON.parse(selectedPokimon);
    enemyPokimon = JSON.parse(enemyPokimonData);

    // Ponemos la vida de los Pokimon en 100
    myPokimon.vida = 100;
    enemyPokimon.vida = 100;

    // Mostramos la información de los Pokimon en la pantalla
    updatePokimonDisplay();

    // Conectamos los botones con sus funciones
    document.getElementById('btnAttack').addEventListener('click', attack);
    document.getElementById('btnDefend').addEventListener('click', defend);
    document.getElementById('btnEvolve').addEventListener('click', evolve);
};

// Función para mostrar la información de los Pokimon en la pantalla
function updatePokimonDisplay() {
    // Cambiamos la imagen y el nombre de nuestro Pokimon
    document.getElementById('myPokimonImg').src = `../Assets/img/${myPokimon.nombre.toLowerCase()}.gif`;
    document.getElementById('myPokimonName').textContent = isEvolved ? myPokimon.evolucion : myPokimon.nombre;
    
    // Cambiamos la imagen y el nombre del Pokimon enemigo
    document.getElementById('enemyPokimonImg').src = `../Assets/img/${enemyPokimon.nombre.toLowerCase()}.gif`;
    document.getElementById('enemyPokimonName').textContent = enemyPokimon.nombre;
    
    // Actualizamos las barras de vida
    updateHealthBars();
}

// Función para actualizar las barras de vida
function updateHealthBars() {
    // Actualizamos la barra de vida de nuestro Pokimon
    const myHealthBar = document.getElementById('myHealthBar');
    const myHealthText = document.getElementById('myHealthText');
    const myHealthPercentage = (myPokimon.vida / 100) * 100;
    
    myHealthBar.style.width = `${myHealthPercentage}%`;
    myHealthText.textContent = `${myPokimon.vida}/100`;
    
    // Cambiamos el color de la barra según la vida
    if (myHealthPercentage > 50) {
        myHealthBar.style.backgroundColor = '#4CAF50';
    } else if (myHealthPercentage > 20) {
        myHealthBar.style.backgroundColor = '#FFC107'; 
    } else {
        myHealthBar.style.backgroundColor = '#F44336'; 
    }
    
    // Actualizamos la barra de vida del enemigo
    const enemyHealthBar = document.getElementById('enemyHealthBar');
    const enemyHealthText = document.getElementById('enemyHealthText');
    const enemyHealthPercentage = (enemyPokimon.vida / 100) * 100;
    
    enemyHealthBar.style.width = `${enemyHealthPercentage}%`;
    enemyHealthText.textContent = `${enemyPokimon.vida}/100`;
    
    // Cambiamos el color de la barra según la vida
    if (enemyHealthPercentage > 50) {
        enemyHealthBar.style.backgroundColor = '#4CAF50'; 
    } else if (enemyHealthPercentage > 20) {
        enemyHealthBar.style.backgroundColor = '#FFC107';
    } else {
        enemyHealthBar.style.backgroundColor = '#F44336';
    }
}

// Función para atacar al enemigo
function attack() {
    // Si el juego ya terminó, no hacemos nada
    if (checkGameOver()) return;
    
    // Calculamos el daño que hará nuestro Pokimon
    let damage = isEvolved ? myPokimon.ataque * 1.5 : myPokimon.ataque;
    damage = Math.floor(damage * (0.8 + Math.random() * 0.4)); // Variamos el daño un poco
    const damageReduction = enemyPokimon.defensa / 100; // Reducimos el daño según la defensa del enemigo
    damage = Math.max(5, Math.floor(damage * (1 - damageReduction))); // Aseguramos que el daño mínimo sea 5
    
    // Quitamos vida al enemigo
    enemyPokimon.vida = Math.max(0, enemyPokimon.vida - damage);
    
    // Actualizamos las barras de vida
    updateHealthBars();
    
    // Mostramos un mensaje del ataque
    alert(`¡${isEvolved ? myPokimon.evolucion : myPokimon.nombre} ataca con ${myPokimon.habilidad} y causa ${damage} de daño!`);
    
    // Si el enemigo ya no tiene vida, ganamos
    if (enemyPokimon.vida <= 0) {
        alert(`¡${enemyPokimon.nombre} ha sido derrotado! ¡Has ganado la batalla!`);
        resetGame();
        return;
    }
    
    // El enemigo ataca automáticamente después
    enemyAttack();
}

// Función para el ataque del enemigo
function enemyAttack() {
    // Si el juego ya terminó, no hacemos nada
    if (checkGameOver()) return;
    
    // Calculamos el daño que hará el enemigo
    let damage = enemyPokimon.ataque;
    damage = Math.floor(damage * (0.8 + Math.random() * 0.4)); // Variamos el daño un poco
    const damageReduction = (isEvolved ? myPokimon.defensa * 1.3 : myPokimon.defensa) / 100; // Reducimos el daño según nuestra defensa
    damage = Math.max(3, Math.floor(damage * (1 - damageReduction))); // Aseguramos que el daño mínimo sea 3
    
    // Quitamos vida a nuestro Pokimon
    myPokimon.vida = Math.max(0, myPokimon.vida - damage);
    
    // Actualizamos las barras de vida
    updateHealthBars();
    
    // Mostramos un mensaje del ataque enemigo
    alert(`¡${enemyPokimon.nombre} contraataca y causa ${damage} de daño!`);
    
    // Si nuestro Pokimon ya no tiene vida, perdemos
    if (myPokimon.vida <= 0) {
        alert(`¡Tu ${isEvolved ? myPokimon.evolucion : myPokimon.nombre} ha sido derrotado! Has perdido la batalla.`);
        resetGame();
    }
}

// Función para defenderse
function defend() {
    // Si el juego ya terminó, no hacemos nada
    if (checkGameOver()) return;
    
    // Aumentamos temporalmente la defensa de nuestro Pokimon
    const originalDefensa = myPokimon.defensa;
    myPokimon.defensa = Math.floor(myPokimon.defensa * 1.5);
    
    alert(`¡${isEvolved ? myPokimon.evolucion : myPokimon.nombre} se pone en posición defensiva`);
    
    // El enemigo ataca
    enemyAttack();
    
    // Restauramos la defensa original después del ataque enemigo
    myPokimon.defensa = originalDefensa;
}

// Función para evolucionar a nuestro Pokimon
function evolve() {
    // Si ya evolucionó, no hacemos nada
    if (isEvolved) {
        alert(`¡${myPokimon.evolucion} ya ha alcanzado su evolución máxima!`);
        return;
    }
    
    // Decidimos si la evolución tiene éxito (70% de probabilidad)
    const evolucionExitosa = Math.random() > 0.3;
    
    if (evolucionExitosa) {
        isEvolved = true; // Marcamos que ya evolucionó
        
        // Mejoramos las estadísticas de nuestro Pokimon
        myPokimon.ataque = Math.floor(myPokimon.ataque * 1.5);
        myPokimon.defensa = Math.floor(myPokimon.defensa * 1.3);
        
        // Mostramos un mensaje de éxito
        alert(`¡Tu ${myPokimon.nombre} ha evolucionado a ${myPokimon.evolucion}!`);
        
        // Cambiamos el nombre en la pantalla
        document.getElementById('myPokimonName').textContent = myPokimon.evolucion;
    } else {
        alert(`¡La evolución ha fallado! Tu ${myPokimon.nombre} necesita más experiencia.`);
    }
    
    // El enemigo ataca después del intento de evolución
    enemyAttack();
}

// Función para verificar si el juego ya terminó
function checkGameOver() {
    return myPokimon.vida <= 0 || enemyPokimon.vida <= 0;
}

// Función para reiniciar el juego
function resetGame() {
    // Volvemos a la pantalla de selección de Pokimon
    window.location.href = "../View/entrenador.html";
}
