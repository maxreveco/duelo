class Carta {
    constructor(nombre, costo){
        this.nombre = nombre;
        this.costo = costo;
    }
}

class UnidadRoja extends Carta {
    constructor(nombre, coste, poder, resiliencia) {
        super("Ninja Cinturón Rojo", 3);
        this.resiliencia = 4;
        this.poder = 3;
    }
    attack(objetivo) {
        objetivo.resiliencia -= this.poder
    }
}

class UnidadNegra extends Carta {
    constructor(nombre, costo, poder, resiliencia) {
        super("Ninja Cinturón Negro", 4);
        this.resiliencia = 4;
        this.poder = 5;
    }
    attack(objetivo) {
        objetivo.resiliencia -= this.poder
    }
}

class AumentoResiliencia extends Carta {
    constructor(nombre, costo, texto, stat, magnitud) {
        super("Algoritmo Difícil", 2);
        this.texto = "aumentar la resistencia del objetivo en 3";
        this.stat = "resiliencia";
        this.magnitud = 3;
    }
    modificaAtributosCarta(objetivo){
        objetivo instanceof UnidadRoja || UnidadNegra ?objetivo.resiliencia += this.magnitud :console.log("el objetivo no pertenece a una unidad");
        
    }
}

class DisminucionResiliencia extends Carta {
    constructor(nombre, costo, texto, stat, magnitud) {
        super("Rechazo de promesa no manejado", 1);
        this.texto = "reducir la resistencia del objetivo en 2";
        this.stat = "resiliencia";
        this.magnitud = -2;
    }
    modificaAtributosCarta(objetivo){
        objetivo instanceof UnidadRoja || UnidadNegra ?objetivo.resiliencia += this.magnitud :console.log("el objetivo no pertenece a una unidad");
        
    }
}

class AumentoPoder extends Carta {
    constructor(nombre, costo, texto, stat, magnitud) {
        super("Programación en pareja", 3);
        this.texto = "aumentar el poder del objetivo en 2";
        this.stat = "poder";
        this.magnitud = 2;
    }
    modificaAtributosCarta(objetivo){
        objetivo instanceof UnidadRoja || UnidadNegra ?objetivo.poder += this.magnitud :console.log("el objetivo no pertenece a una unidad");
        
    }
}



const aumentarResilencia = new AumentoResiliencia;
const disminuirResilencia = new DisminucionResiliencia;
const aumentarPoder = new AumentoPoder;

//Turno 1
const jugador1 = new unidadRoja;
aumentarResilencia.modificaAtributosCarta(jugador1);

//Turno 2
const jugador2 = new unidadNegra;
disminuirResilencia.modificaAtributosCarta(jugador1);

//Turno 3
aumentarPoder.modificaAtributosCarta(jugador1);
jugador1.attack(jugador2);
