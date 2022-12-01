async function algoritmoAlfa(payloadId, payloadAPI) {
  let respuesta = await fetch(payloadAPI); // CT O(1)
  let data = await respuesta.json(); // CT O(1)
  for (let i = 0; i < data.length; i++) {
    // CT O(n)
    let payloads = data[i].rocket.second_stage["payloads"]; // CT O(1)
    for (let j = 0; j < payloads.length; j++) {
      // CT O(n)
      if (payloadId == payloads[j].payload_id) {
        // CT O(1)
        return true; // CT O(1)
      }
    }
  }
  return false; // CT O(1)
}

// Complejidad Temporal -> O(n * n + 1 + 1 + 1 + 1 + 1 + 1) -> O(n^2 + 6) -> O(n^2)
