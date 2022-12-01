/**
 * Complejidad Temporal -> O( n^2 )
 * Complejidad Espacial -> O( n )
 * Espacio Auxiliar -> O( 1 )
 */
function bubbleSort(arreglo) {
  // CE O(n)
  let longitud = arreglo.length; // CT O(1) // CE O(1)
  for (let i = 0; i < longitud; i++) {
    // CE O(1)
    // CT O(n)
    for (let j = 0; j < longitud; j++) {
      // CE O(1)
      // CT O(n)
      if (arreglo[j] > arreglo[j + 1]) {
        // CT O(1)
        let temporal = arreglo[j]; // CT O(1) // CE O(1)
        arreglo[j] = arreglo[j + 1]; // CT O(1)
        arreglo[j + 1] = temporal; // CT O(1)
      }
    }
  }
  return arreglo; // CT O(1)
}
