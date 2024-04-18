function titleFormat(text) {
    if (typeof text !== 'string') {
      return "Invalid input"; // Si no se proporciona una cadena, devolver mensaje de error
    }
  
    if (text === '') {
      return "Invalid input"; // Si la cadena es vacía, devolver mensaje de error
    }
  
    const firstLetter = text.charAt(0).toUpperCase(); // Obtener la primera letra y convertirla a mayúscula
    const restOfTitle = text.slice(1).toLowerCase(); // Obtener el resto del título y convertirlo a minúsculas
  
    const formattedTitle = firstLetter + restOfTitle; // Concatenar ambas partes del título
  
    return formattedTitle; // Devolver la longitud del título formateado
  }
  
  // Ejemplos de uso:
  console.log(titleFormat("hola")); // Devuelve 4
  console.log(titleFormat("")); // Devuelve "Invalid input"
  console.log(titleFormat(123)); // Devuelve "Invalid input"
  console.log(titleFormat("eJEMPLO")); // Devuelve 7
  