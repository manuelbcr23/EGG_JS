function lengthOf(text) {
    if (typeof text !== 'string') {
      return "Invalid input"; // Si no se proporciona una cadena, devolver mensaje de error
    }
  
    if (text === '') {
      return "Invalid input"; // Si la cadena es vacía, devolver mensaje de error
    }
  
    return text.length; // Devolver la longitud de la cadena
  }
  
  // Ejemplos de uso:
  console.log(lengthOf("Hola")); // Devuelve 4
  console.log(lengthOf("")); // Devuelve "Invalid input"
  console.log(lengthOf(123)); // Devuelve "Invalid input"
  console.log(lengthOf("¡Hola, mundo!")); // Devuelve 13
  