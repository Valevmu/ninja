class Ninja {
    constructor(nombre, salud, velocidad, fuerza) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza
    }
    sayName() {
        console.log(this.nombre)
    }
    showStats() {
        console.log(" Mi nombre es " + this.nombre + " ,mi salud es " + this.salud + " mi fuerza es " +this.fuerza + " y mi velocidad es " + this.velocidad)

    }
    drinkSake() {
        console.log( " 10 " + this.salud)

    }
}
const ninja = new Ninja ("Valentina", "excelente", "3", "3");

ninja.sayName();
ninja.showStats();
ninja.drinkSake();
