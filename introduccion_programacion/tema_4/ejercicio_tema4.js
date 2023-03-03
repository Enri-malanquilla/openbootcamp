/*
###########################
##EJERCICIO TEMA 4#########
## HECHO EN JAVASCRIPT#####
###########################
*/


// if
let numeroIf = 9;
if (numeroIf > 0) {
  console.log("El número es positivo.");
} else if (numeroIf < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}

// while
let numeroWhile = 0;
while (numeroWhile < 3) {
  numeroWhile++;
  console.log(`Número en while ${numeroWhile}`);
}

// dowhile
let numeroDoWhile = 0;
do {
  numeroDoWhile++;
  if (numeroDoWhile === 2) {
      console.log(`Número en Dowhile ${numeroDoWhile}`);
    
  }
} while (numeroDoWhile < 3);

// Bucle for
for (let i = 0; i <= 3; i++) {
  console.log(`Número en for ${i}`);
}

// Switch
let estacion = "verano";
switch (estacion) {
  case "primavera":
    console.log("Estamos en primavera.");
    break;
  case "verano":
    console.log("Estamos en verano.");
    break;
  case "otoño":
    console.log("Estamos en otoño.");
    break;
  case "invierno":
    console.log("Estamos en invierno.");
    break;
  default:
    console.log("upppppssssss solo estaciones");
    break;
}
