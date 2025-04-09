// Creamos las clases para los Pokimons y los entrenadores

class Pkimon {
    constructor(nombre, tipo, ataque, defensa, habilidad, evolucion) {
        // Guardamos el nombre, tipo, ataque, defensa, habilidad y evolución del Pokimon
        this.nombre = nombre;
        this.tipo = tipo;
        this.ataque = ataque;
        this.defensa = defensa;
        this.habilidad = habilidad;
        this.evolucion = evolucion;
        this.vida = 100; // Le damos una vida inicial de 100
    }
}

class Entrenador {
    constructor(nombre) {
        // Guardamos el nombre del entrenador
        this.nombre = nombre;
        this.pkimons = []; // Lista para guardar los Pokimons del entrenador
    }

    agregarPkimon(pkimon) {
        // Revisamos si el entrenador ya tiene un Pokimon
        if (this.pkimons.length < 1) {
            this.pkimons.push(pkimon); // Agregamos el Pokimon a la lista
            return true; // Decimos que sí se pudo agregar
        } else {
            return false; // Decimos que no se pudo agregar
        }
    }
}

// Creamos los Pokimons con sus datos
const pikachu = new Pkimon("Pikachu", "Eléctrico", 75, 45, "Electricidad", "Raichu");
const charmander = new Pkimon("Charmander", "Fuego", 62, 43, "Mar de llamas", "Charmeleon");
const squirtle = new Pkimon("Squirtle", "Agua", 48, 70, "Torrente de agua", "Wartortle");
const bulbasaur = new Pkimon("Bulbasaur", "Planta/Veneno", 49, 49, "Espora venenosa", "Ivysaur");

// Creamos al entrenador con su nombre
const entrenador = new Entrenador("Rosa");

// Función para cuando el usuario elige un Pokimon
function seleccionarPkimon(pokimon) {
    // Intentamos agregar el Pokimon al entrenador
    if (entrenador.agregarPkimon(pokimon)) {
        alert('Seleccionaste a ' + pokimon.nombre + ' como tu Pokimon.'); // Avisamos al usuario
        alert('¡Prepárate para la batalla!'); // Otro aviso

        // Guardamos el Pokimon elegido en el navegador
        localStorage.setItem('selectedPokimon', JSON.stringify(pokimon));

        // Elegimos un Pokimon enemigo al azar que no sea el elegido
        const enemyPokimon = [pikachu, charmander, squirtle, bulbasaur].filter(p => p.nombre !== pokimon.nombre);
        const randomEnemy = enemyPokimon[Math.floor(Math.random() * enemyPokimon.length)];

        // Guardamos el Pokimon enemigo en el navegador
        localStorage.setItem('enemyPokimon', JSON.stringify(randomEnemy));

        // Cambiamos a la pantalla de batalla
        window.location.href = "../View/zonaDebatalla.html";
    }
}

// Conectamos los botones de la página con los Pokimons
document.getElementById("btnPikachu").addEventListener("click", () => seleccionarPkimon(pikachu));
document.getElementById("btnCharmander").addEventListener("click", () => seleccionarPkimon(charmander));
document.getElementById("btnSquirtle").addEventListener("click", () => seleccionarPkimon(squirtle));
document.getElementById("btnBulbasaur").addEventListener("click", () => seleccionarPkimon(bulbasaur));
