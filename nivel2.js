
//NIVEL 2
//creamos una funcion constructora 

function Persona (nombre,edad,) {
    this.nombre= nombre;
    this.edad= edad; 

//agregamos el metodo saludar 
this.saludar= function (){
    console.log (`Hola! Me llamo ${this.nombre} y tengo ${this,edad} años`);
};
}
//creamos dos personas nuevas con new
const persona1 = new Persona ("Narciso", 30);
const persona2 = new Persona ("Oriana", 28);

persona1.saludar ();
persona2.saludar();