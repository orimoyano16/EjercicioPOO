//NIVEL 4 
//creamos una clase 
class Animal {
    constructor(nombre){
        this.nombre= nombre;       
    }
    //metodo
    hacerSonido (){
        console.log(`${this.nombre} está haciendo un sonido`);
    }
//creamos una clase perro que hereda de animal 
}
class Perro extends Animal {
    constructor (nombre, raza){
super(nombre);
    this.raza= raza;
}
hacerSonido(){
    console.log(`${this.nombre} ladra: ¡GUAU, GUAU!`);

}
}
// Probamos nuestras clase
const animalCualquiera = new Animal ("El bicho");
const miPerro = new Perro ("Firulais", "Labrador");

animalCualquiera.hacerSonido();
miPerro.hacerSonido();
