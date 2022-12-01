async function algoritmoBeta(payloadId, payloadAPI) {
  let arreglosCoinciden = (arreglo1, arreglo2) => {
    // CT O(1)
    if (arreglo1.length != arreglo2.length) {
      // CT O(1)
      return false; // CT O(1)
    }
    for (let i = 0; i < arreglo1.length; i++) {
      // CT O(n)
      if (arreglo1[i] != arreglo2[i]) {
        // CT O(1)
        return false; // CT O(1)
      }
    }
    return true; // CT O(1)
  };
  let respuesta = await fetch(payloadAPI); // CT O(1)
  let data = await respuesta.json(); // CT O(1)
  let payloadIdArray = payloadId.split(""); // CT O(1)
  for (let i = 0; i < data.length; i++) {
    // CT O(n)
    let payloads = data[i].rocket.second_stage.payloads; // CT O(1)
    for (let j = 0; j < payloads.length; j++) {
      // CT O(n)
      if (arreglosCoinciden(payloadIdArray, payloads[j].payload_id.split(""))) {
        // CT O(1)
        return true; // CT O(1)
      }
    }
  }
  return false; // CT O(1)
}

// Complejidad temporal -> O(n * n * n + 13) -> O(n^3)
