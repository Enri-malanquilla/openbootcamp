
/*
###########################
##EJERCICIO TEMA 3#########
## HECHO EN JAVASCRIPT#####
###########################
*/


//Primera Parte
function addNumbers(n1, n2, n3) {
    return n1 + n2 + n3;
  }
  
  console.log(`Sumando números, el resultado es ${addNumbers(2, 20, 17)}`);


  //Segunda Parte
  class Coche {
    constructor() {
      this.doorsNumbers = 3;
    } 
    
    addDoor() {
      this.doorsNumbers++;
    }
    getDoors() {
      return this.doorsNumbers;
    }
  }
  
  const car = new Coche();
  car.addDoor();
  
  //Número de puertas del coche, con la puerta añadida
  console.log(`Mi coche tiene ${car.getDoors()} puertas`);
  
  