//NIVEL 3 
// creamos la funcion constructora 
function Persona (nombre,edad){
    this.nombre= nombre;
    this.edad= edad;
    this.saludar = function () {
        console.log (`¡Hola! Me llamo ${this.nombre} y tengo ${this.edad} años`);
    };
    }
 // agregamos el metodo "caminar al prototipo persona"
 Persona.prototype.caminar= function (){
    return "Estoy caminando";

 };
 //creamos las instancias 
 const persona1= new Persona("Oriana", 28);
 const persona2= new Persona ("Narciso", 30);

 //imprimimos el resultado en consola 
 console.log (persona1.nombre +  " dice: "+ persona1.caminar());

 console.log (persona2.nombre + " dice"+ persona2.caminar ());