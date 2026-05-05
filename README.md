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
