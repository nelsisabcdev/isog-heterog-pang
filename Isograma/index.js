function esIsograma(palabra) {
  // Convertir el string a minúsculas y eliminar los espacios
  palabra = palabra.toLowerCase().replace(/\s/g, "");
  // Crear una expresión regular que busca letras repetidas
  let regex = /([a-z]).*\1/i;
  // Si el string coincide con la expresión regular, significa que no es un isograma
  if (palabra.match(regex)) {
    return false;
  } else {
    // Si el string no coincide con la expresión regular, significa que es un isograma
    return true;
  }
}

function escribirPalabra() {
 
  let input = document.getElementById("palabra");
 
  let palabra = input.value;
 
  if (palabra === "") {
 
    alert("Por favor, escribe una palabra");
  } else {
  
    let resultado = esIsograma(palabra);
    
    let div = document.getElementById("result");
    
    div.innerHTML = "La palabra " + palabra + " es un isograma: " + resultado;
  }
}

  esIsograma();
  escribirPalabra();