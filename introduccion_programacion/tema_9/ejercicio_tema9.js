/*
###########################
##EJERCICIO TEMA 9#########
## HECHO EN JAVASCRIPT#####
###########################
*/





class Persona {
    constructor(edad, nombre, telefono) {
      this.edad = edad;
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
  class Cliente extends Persona {
    constructor(edad, nombre, telefono, credito) {
      super(edad, nombre, telefono);
      this.credito = credito;
    }
  }
  
  class Trabajador extends Persona {
    constructor(edad, nombre, telefono, salario) {
      super(edad, nombre, telefono);
      this.salario = salario;
    }
  }
  
  //cliente
  const cliente = new Cliente(25, 'Fran', '666666666', 30000);
  console.log(`Cliente: ${cliente.nombre}, ${cliente.edad} años, teléfono: ${cliente.telefono}, crédito: ${cliente.credito}`);
  
  //trabajador
  const trabajador = new Trabajador(35, 'María', '666111111', 1500);
  console.log(`Trabajador: ${trabajador.nombre}, ${trabajador.edad} años, teléfono: ${trabajador.telefono}, salario: ${trabajador.salario}`);
  