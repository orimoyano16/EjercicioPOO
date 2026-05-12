# EjerciciosPOO // Moyano Oriana 
## Clase 04/05/2026
### Ejercicios: 

🟢 Nivel 1
Crear un objeto auto con:
marca
modelo
método arrancar()
Acceder a una propiedad del objeto.

🟡 Nivel 2
Crear una función constructora Persona:
nombre
edad
método saludar()
Crear 2 personas con new.

🟠 Nivel 3
Usar prototipos:
Persona.prototype.caminar = function() {
 return "Estoy caminando";
};

🔵 Nivel 4
Crear una clase Animal:
propiedad nombre
método hacerSonido()
Crear una clase Perro que herede de Animal.

🔴 Nivel 5 (desafío)
Crear una clase CuentaBancaria:
saldo
métodos:
depositar()
retirar()
verSaldo()

#### Preguntas 


1. ¿Qué es un objeto en JavaScript?

2. ¿Qué diferencia hay entre clase y objeto?

3. ¿Qué es un prototipo?

4. ¿Qué hace la palabra new?

5. ¿Por qué JS no es realmente orientado a clases?

6. ¿Qué diferencia hay entre:
                             * método dentro del constructor
                             * método en prototype?
   
7. ¿Qué hace extends?
   
8. ¿Para qué sirve super()?
    
9. ¿Qué es la prototype chain?

10. ¿Cuándo conviene usar POO y cuándo no?
    
11. ¿Qué ventaja tiene sobre código “normal”?
    
12. ¿Qué problema resuelve la herencia?




#### Respuestas 

1. En JavaScript, un objeto es una colección de datos relacionados y funcionalidades. Se componen de pares de "clave-valor".
2. La Clase es el plano arquitectónico o el "molde". Define qué características y comportamientos tendrá algo, pero no es la cosa real. (Ej: El plano de una casa). 
El Objeto es la instancia concreta creada a partir de ese molde. Es la cosa real que ocupa espacio y con la que puedes interactuar. (Ej: La casa ya construida en la que puedes entrar).
A partir de una sola clase (el plano), puedes construir múltiples objetos distintos (muchas casas, cada una con un dueño diferente).

3. Un prototipo es un mecanismo interno de JavaScript. Es, literalmente, un objeto oculto al que otro objeto está "vinculado" y del cual puede heredar métodos y propiedades.

4. Cuando usas new delante de una función constructora o una clase (ej: new Persona()), JavaScript hace cuatro cosas automáticamente "entre bastidores":

A. Crea un nuevo objeto vacío en la memoria ({}).

B. Vincula ese nuevo objeto al prototipo de la función constructora.

C. Apunta la palabra clave this hacia ese nuevo objeto (para que cuando escribas this.nombre = "Juan", se guarde en ese objeto vacío).

D. Devuelve el nuevo objeto de forma automática (por eso no tienes que escribir return this en los constructores).

5. Porque, en su núcleo, JavaScript no tiene clases reales como las tienen lenguajes como Java o C++. JavaScript utiliza un sistema llamado Herencia Prototípica.
Cuando se introdujo la palabra clave class en JavaScript (en el estándar ES6 de 2015), los desarrolladores del lenguaje no cambiaron cómo funcionaba JavaScript por debajo. Simplemente crearon lo que se llama "azúcar sintáctico" (syntactic sugar). Es decir, nos dieron una forma más bonita, limpia y familiar de escribir código que, por debajo, sigue usando exactamente las mismas funciones constructoras y prototipos ocultos

6. |Metodo|Constructor|Prototype|
   |------|-----------|---------|
   |      |  Cada vez que creas un objeto con new, JavaScript crea una copia exacta e independiente de esa función. Si tienes 10,000 objetos, tendrás 10,000 funciones idénticas ocupando espacio en la memoria RAM.|La función se guarda en la memoria una sola vez. Todos los miles de objetos que crees simplemente "viajarán" a ese prototipo compartido para usar la función cuando la necesiten. Es mucho más eficiente.|

7. Es la palabra clave que le dice a JavaScript que quieres crear una clase hija que herede de una clase padre.
   
8. Cuando una clase hija (que usa extends) tiene su propio constructor, necesitas una forma de llamar al constructor del padre para que inicialice las propiedades que estás heredando. Eso es exactamente lo que hace super().
    
9. Es el sistema de búsqueda interno de JavaScript.
Imagina una fila de cajas conectadas por un hilo invisible. Si le pides a un objeto que ejecute un método (como .toString()), JavaScript busca primero en la caja de ese objeto. Si no está ahí, sigue el hilo hacia la siguiente caja (su prototipo). Si tampoco está, sigue al prototipo del prototipo. Esta cadena continúa hasta llegar al objeto base (Object.prototype) y, si no lo encuentra ahí, devuelve undefined o un error.

10.
|POO|Cuando SI |Cuando NO |
|---|----------|----------|
|   |Cuando tu programa simula entidades que tienen estado (datos) y comportamiento (acciones). Es excelente para aplicaciones grandes, videojuegos (Clase Enemigo, Jugador), interfaces de usuario (Clase Boton, Ventana) y sistemas donde los objetos interactúan entre sí.|Si estás haciendo transformaciones de datos matemáticas, scripts sencillos, o manejando flujos de datos puros. En esos casos, el código procedural (funciones simples paso a paso) o la Programación Funcional (funciones que entran y salen sin modificar estados externos) suelen ser más limpios, rápidos y menos propensos a errores que crear clases innecesarias.|

11. 

|Ventajas|POO|
|--------|---|
|Organización (Encapsulamiento)|Agrupa los datos y las funciones que los modifican en un solo lugar (el objeto).|
|Mantenibilidad|Si hay un error con un "Usuario", sabes exactamente en qué clase buscar el problema.|
|Modularidad|Puedes tratar a los objetos como piezas de Lego aisladas.|


12. Resuelve el problema de la duplicación de código.
* Ejemplo:
* <img width="415" height="268" alt="image" src="https://github.com/user-attachments/assets/ed4bacf1-d1e5-4d61-bb50-1fcd3533db4d" />

Si tienes un sistema con Perro, Gato y Loro, todos necesitan respirar, comer y dormir. Sin herencia, tendrías que escribir el código para respirar, comer y dormir tres veces distintas. Con herencia, creas una clase Animal con ese código una sola vez, y haces que los tres hereden de ella, ahorrando cientos de líneas de código y facilitando las actualizaciones.
