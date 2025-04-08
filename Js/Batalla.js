// Creación de las clases Pokémon y Entrenador

class Pokimon {
    constructor(nombre, tipo, ataque, defensa, habilidad, evolucion) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.ataque = ataque;
        this.defensa = defensa;
        this.habilidad = habilidad;
        this.evolucion = evolucion;
        this.vida = 100;
    }
}

class Entrenador {
    constructor(nombre) {
        this.nombre = nombre;
        this.pokimons = [];
    }
}

const pikachu = new Pokimon("Pikachu", "Eléctrico", 75, 45, "Electricidad", "Raichu");
const charmander = new Pokimon("Charmander", "Fuego", 62, 43, "Mar de llamas", "Charmeleon");
const squirtle = new Pokimon("Squirtle", "Agua", 48, 70, "Torrente de agua", "Wartortle");
const bulbasaur = new Pokimon("Bulbasaur", "Planta/Veneno", 49, 49, "Espora venenosa", "Ivysaur");

const entrenador = new Entrenador("Rosa"); // Nombre del entrenador

// Función para seleccionar un Pokémon al hacer clic en los botones

