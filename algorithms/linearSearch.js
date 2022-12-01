/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O( n )
 * Espacio Auxiliar = Complejidad Espacial - Espacio de entrada
 * Espacio Auxiliar = O( 1 )
 */
function linearSearch(arreglo, clave) {
  // CE O(n)
  for (let indice = 0; indice < arreglo.length; indice++) {
    // CE O(1)
    // CT O(n)
    if (arreglo[indice] === clave) {
      // CT O(1)
      return indice; // CT O(1)
    }
  }
  return -1; // CT O(1)
}
