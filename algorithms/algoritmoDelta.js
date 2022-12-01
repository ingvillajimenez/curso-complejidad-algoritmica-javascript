async function algoritmoDelta(payloadId, payloadAPI) {
  let respuesta = await fetch(payloadAPI); // CT O(1)
  let data = await respuesta.json(); // CT O(1)
  let listaDePayloads = []; // CT O(1)
  let longitudData = data.length; // CT O(1)

  for (let i = 0; i < longitudData; i++) {
    // CT O(n)
    let payloads = data[i].rocket; // CT O(1)
    listaDePayloads.push(...payloads.second_stage["payloads"]); // CT O(1)
  }

  for (let i = 0; i < listaDePayloads.length; i++) {
    // CT O(n)
    let localPayloadId = listaDePayloads[i].payload_id; // CT O(1)
    if (localPayloadId == payloadId) {
      // CT O(1)
      return true; // CT O(1)
    } else {
      return false; // CT O(1)
    }
  }
}

// Complejidad temporal -> O(n + n + 10) -> O(2n + 10) -> O(n)
