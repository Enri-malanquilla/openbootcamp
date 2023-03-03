/*
###########################
##EJERCICIO TEMA 8#########
## HECHO EN JAVASCRIPT#####
###########################
*/


class Persona {
    constructor() {
      let _edad,
         _nombre,
        _telefono;
      
      this.getEdad = function() {
        return _edad;
      };
      this.setEdad = function(edad) {
        _edad = edad;
      };
      
      this.getNombre = function() {
        return _nombre;
      };
      this.setNombre = function(nombre) {
        _nombre = nombre;
      };
      
      this.getTelefono = function() {
        return _telefono;
      };
      this.setTelefono = function(telefono) {
        _telefono = telefono;
      };
    }
  }
  
  // Crear un objeto persona
  const persona = new Persona();
  
  //Damos valores al objeto
  persona.setEdad(36);
  persona.setNombre('Enri');
  persona.setTelefono('666666666');
  
  //Mostramos las propiedades del objeto
  console.log(`La persona se llama ${persona.getNombre()}, tiene ${persona.getEdad()} años y su teléfono es ${persona.getTelefono()}.`);
  