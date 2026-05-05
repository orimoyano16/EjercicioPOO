//NIVEL 5 
class cuentaBancaria {
    #saldo;
    constructor(saldoInicial= 0){
    this.#saldo= saldoInicial 
}
//metodo agregar dinero 
depositar (cantidad) {
    if (cantidad > 0 ){
        this.#saldo += cantidad;
        console.log (`Has depositado ${this,cantidad} de dolares`);
    } else {
        console.log ("Error: La cantidad debe ser mayor a 0 dolares")
    }
}
//metodo para retitar 
retirar (cantidad){
    if (cantidad<=0){
        console.log ("Error: La cantidad para retirar debe ser mayor a 0 dolares");
    }else if (cantidad > this.#saldo) {
        console.log ("Error: Fondos insuficientes para completar la operacion");
    }else{
        this.#saldo -= cantidad;
        console.log (`Has retirado ${cantidad} dolares.`);
    
        
    }
}
//metodo para consultar el saldo 
verSaldo (){
    console.log (`Tu saldo actual es : ${this.#saldo} dolares`);
    return this.#saldo;
}
}

//LO PONEMOS A PRUEBA!!
const miCuenta= new cuentaBancaria (1000);
miCuenta.verSaldo();
miCuenta.depositar(500);
miCuenta.retirar(420);

//volvemos a consultar el saldo 
miCuenta.verSaldo();
