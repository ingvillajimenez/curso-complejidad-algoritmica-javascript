/**
 * Complejidad Temporal -> O( n^2 )
 * Complejidad Espacial -> O( n )
 * Espacio Auxiliar -> O( 1 )
 */
function selectionSort(arreglo) {
  // CE O(n)
  let longitud = arreglo.length; // CT O(1) // CE O(1)

  for (let i = 0; i < longitud; i++) {
    // CE O(1)
    // CT O(n)
    let minimo = i; // CT O (1) // CE O(1)
    for (let j = i + 1; j < longitud; j++) {
      // CE O(1)
      // CT O(n)
      if (arreglo[j] < arreglo[minimo]) {
        // CT O(1)
        minimo = j; // CT O(1)
      }
    }
    if (minimo != i) {
      // CT O(1)
      let temporal = arreglo[i]; // CT O(1) // CE O(1)
      arreglo[i] = arreglo[minimo]; // CT O(1)
      arreglo[minimo] = temporal; // CT O(1)
    }
  }
  return arreglo; // CT O(1)
}
