function stringIncludes(substring, text) {
    if (typeof substring !== 'string' || typeof text !== 'string') {
      return "Invalid input"; // Si alguno de los parámetros no es una cadena, devolver mensaje de error
    }
  
    return text.includes(substring); // Verificar si la primera cadena está incluida en la segunda
  }
  
  // Ejemplos de uso:
  console.log(stringIncludes("mundo", "Hola mundo")); // Devuelve true
  console.log(stringIncludes("adiós", "Hola mundo")); // Devuelve false
  console.log(stringIncludes(123, "Hola mundo")); // Devuelve "Invalid input"
  console.log(stringIncludes("mundo", 456)); // Devuelve "Invalid input"
  