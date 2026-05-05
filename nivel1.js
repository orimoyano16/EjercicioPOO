//NIVEL 1
//creamos el objeto 
const auto = {
    marca : 'toyota',
    modelo : 'corolla',

// agregamos la accion que puede realizar el objeto 
arrancar : function()  
{
    console.log ("El motor esta en marcha")
}
}
// accedemos a la propiedad del auto 
console.log ("La marca de mi auto es:"+ auto.marca);
console.log ("El modelo de mi auto es:" + auto.modelo);


auto.arrancar();