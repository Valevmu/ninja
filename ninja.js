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
        console.log(  " 10 "  +  this.salud )

    }
}
class Sensei extends Ninja {
    constructor (nombre, salud, velocidad, fuerza, sabiduria) {
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = sabiduria;

    }
    speaksWindsdom() {
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }

}
// const ninja = new Ninja ("Valentina", "excelente", "3", "3");

// ninja.sayName();
// ninja.showStats();
// ninja.drinkSake();

//Herencia
 const Supersensei =  new Sensei ("Master Splinter", "200", "10", "10", "10");
Supersensei.sayName();
Supersensei.speaksWindsdom();
Supersensei.showStats();

//Output
// Master Splinter
// "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses
// Mi nombre es Master Splinter ,mi salud es 200 mi fuerza es 10 y mi velocidad es 10
