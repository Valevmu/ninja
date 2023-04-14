// class animal {
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
//     }
//     verInfo() {
//         console.log(this.info)    //nos ahorramos *
//     }
//     ladrar(){     //aca tenemos polimorfismo, los tres objetos se comportamos diferentes
//         if (this.especie == "perro") {
//             console.log("Waw");
//         }else {
//             console.log("NO puede ladar, ya que es un " +  this.especie)
//         }
//     }
// }

// // con this seleccionamos el objeto

// let perro = new animal("perro", "5", "marron");
// let gato = new animal("gato", "5", "negro"); 
// let pajaro = new animal("pajaro", "1", "verde"); //new instncia la creacion del objeto

// // console.log(perro.info);  /*
// // console.log(gato.info);
// // console.log(pajaro.info);

// //los metodos son las acciones que podemos hacer, se crean detro de la clase. this solo se pone en contructores, y las funciones flechas no pueden ser usadas para crear metodos en las clases
// perro.ladrar();
// gato.ladrar();
// pajaro.ladrar();



// Herencia, crear una clase que pueda heredar lo de la clase anterior


class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo() {
        console.log(this.info) 
    }

}
class Perro extends Animal {    //keyword para herencia
    constructor (especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }
    ladrar() {
        alert("waw");
    }
}

let perro = new Perro("perro", "5","marron", "doverman");  //NO PUEDO TENER UN OBJETO CON EL MISMO NOMBRE QUE LA CLASE
let gato = new Animal("gato", "5", "negro"); 
let pajaro = new Animal("pajaro", "1", "verde"); 

perro.ladrar();
gato.ladrar();
pajaro.verInfo();


