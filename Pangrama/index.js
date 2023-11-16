function esPangrama(palabra) {
  // Convertir el string a minúsculas y eliminar los espacios
  palabra = palabra.toLowerCase().replace(/\s/g, "");
  // Crear una variable con el alfabeto español en minúsculas
  let alfabeto = "abcdefghijklmnñopqrstuvwxyz";
  // Recorrer el alfabeto con un bucle for
  for (let i = 0; i < alfabeto.length; i++) {
    // Obtener la letra actual del alfabeto
    let letra = alfabeto[i];
    // Si la letra no está en el string, significa que no es un pangrama
    if (!palabra.includes(letra)) {
      return false;
    } 
} return true;
}
function escribirPalabra() {
 
  let input = document.getElementById("palabra");
 
  let palabra = input.value;
 
  if (palabra === "") {
 
    alert("Por favor, escribe una palabra");
  } else {
  
    let resultado = esPangrama(palabra);
    
    let div = document.getElementById("result");
    
    div.innerHTML = "La palabra " + palabra + " es un pangrama: " + resultado;
  }
}

  esPangrama();
  escribirPalabra();