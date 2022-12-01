function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

const inicioTiempo = performance.now();
contar(5);
const finalTiempo = performance.now();
const duracion = finalTiempo - inicioTiempo;

console.log(`El algoritmo contar ha durado ${duracion}ms.`);
