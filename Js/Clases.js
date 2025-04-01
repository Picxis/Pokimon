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

    atacar() {
        let multiplicador = Math.random() * 0.4 + 0.8;
        let dañoTotal = Math.floor(this.ataque * multiplicador);
        console.log(`${this.nombre} usa ${this.habilidad}!`);
        return dañoTotal;
    }

    defender(daño) {
        let dañoRecibido = Math.max(1, daño - this.defensa / 2);
        this.vida -= dañoRecibido;
        if (this.vida < 0) {
            this.vida = 0;
        }
        console.log(`${this.nombre} recibe ${dañoRecibido} puntos de daño!`);
        return dañoRecibido;
    }

    estaVivo() {
        return this.vida > 0;
    }
}

class Entrenador {
    constructor(nombre) {
        this.nombre = nombre;
        this.pokimons = [];
        this.pokimonActivo = null;
    }

    añadirPokimon(pokimon) {
        if (this.pokimons.length < 6) {
            this.pokimons.push(pokimon);
            console.log(`${this.nombre} ha añadido a ${pokimon.nombre} a su equipo!`);
        } else {
            console.log(`¡El equipo de ${this.nombre} está completo!`);
        }
    }

    cambiarPokimon(indice) {
        if (indice >= 0 && indice < this.pokimons.length) {
            this.pokimonActivo = this.pokimons[indice];
            console.log(`${this.nombre} elige a ${this.pokimonActivo.nombre}!`);
            return true;
        } else {
            console.log("No hay un pokimon en esa posición!");
            return false;
        }
    }

    atacarConPokimonActivo() {
        if (this.pokimonActivo && this.pokimonActivo.estaVivo()) {
            return this.pokimonActivo.atacar();
        } else {
            console.log(`¡${this.nombre} no tiene un pokimon activo que pueda pelear!`);
            return 0;
        }
    }
}

class Batalla {
    constructor(entrenador1, entrenador2) {
        this.entrenador1 = entrenador1;
        this.entrenador2 = entrenador2;
        this.turno = 1;
        this.ganador = null;
        console.log("¡Batalla iniciada entre " + entrenador1.nombre + " y " + entrenador2.nombre + "!");
    }

    ataque(atacante, defensor) {
        if (!atacante.pokimonActivo || !defensor.pokimonActivo) {
            console.log("¡Ambos entrenadores deben tener un pokimon activo!");
            return {
                mensaje: "¡Ambos entrenadores deben tener un pokimon activo!",
                finalizada: false
            };
        }

        let daño = atacante.atacarConPokimonActivo();
        let dañoRecibido = defensor.pokimonActivo.defender(daño);

        let mensaje = `${atacante.nombre} ataca con ${atacante.pokimonActivo.nombre} y causa ${dañoRecibido} de daño. 
                      A ${defensor.pokimonActivo.nombre} le quedan ${defensor.pokimonActivo.vida} puntos de vida.`;

        if (!defensor.pokimonActivo.estaVivo()) {
            mensaje += `\n¡${defensor.pokimonActivo.nombre} se ha debilitado!`;
            this.ganador = atacante;
            return { 
                mensaje: mensaje, 
                finalizada: true,
                ganador: atacante.nombre
            };
        }

        this.turno++;
        return { 
            mensaje: mensaje, 
            finalizada: false
        };
    }

    defensa(defensor) {
        if (!defensor.pokimonActivo) {
            console.log("¡El entrenador debe tener un pokimon activo!");
            return "¡El entrenador debe tener un pokimon activo!";
        }
        
        let defensaOriginal = defensor.pokimonActivo.defensa;
        defensor.pokimonActivo.defensa = Math.floor(defensaOriginal * 1.5);
        
        let mensaje = `${defensor.nombre} ordena a ${defensor.pokimonActivo.nombre} que se prepare para defenderse. ¡Su defensa aumenta temporalmente!`;
        
        setTimeout(() => {
            defensor.pokimonActivo.defensa = defensaOriginal;
            console.log(`La defensa de ${defensor.pokimonActivo.nombre} vuelve a la normalidad.`);
        }, 5000);
        
        return mensaje;
    }
}

console.log("Clases de Pokimon cargadas correctamente");
