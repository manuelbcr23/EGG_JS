function palindrome(text) {
    if (typeof text !== 'string') {
      return "Invalid input"; // Si el parámetro no es una cadena, devolver mensaje de error
    }
  
    // Dividir la cadena en caracteres, invertirlos y luego unirlos nuevamente
    const reversedText = text.split('').reverse().join('');
  
    // Verificar si la cadena original es igual a la cadena invertida
    return text === reversedText;
  }
  
  // Ejemplos de uso:
  console.log(palindrome("reconocer")); // Devuelve true
  console.log(palindrome("oso")); // Devuelve true
  console.log(palindrome("Hola mundo")); // Devuelve false
  console.log(palindrome(123)); // Devuelve "Invalid input"
