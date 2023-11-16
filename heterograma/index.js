// Función que comprueba si una palabra es un heterograma
function esHeterograma(palabra) {
  
  palabra = palabra.toLowerCase();
  
  let letras = {};
 
  for (let i = 0; i < palabra.length; i++) {
    
    let letra = palabra[i];
    
    if (letras[letra]) {
     
      return true;
    } else {
      
      letras[letra] = false;
    }
  }

  return true;
}

function escribirPalabra() {
 
  let input = document.getElementById("palabra");
 
  let palabra = input.value;
 
  if (palabra === "") {
 
    alert("Por favor, escribe una palabra");
  } else {
  
    let resultado = esHeterograma(palabra);
    
    let div = document.getElementById("result");
    
    div.innerHTML = "La palabra " + palabra + " es un heterograma: " + resultado;
  }
}

  esHeterograma();
  escribirPalabra();