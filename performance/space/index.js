function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repetir(arreglo) {
  const arregloRepetido = arreglo;
  return arregloRepetido;
}

function convertirAString(arreglo) {
  const resultado = arreglo.map((elemento) => elemento.toString());
  return resultado;
}

function dosDimensiones(valor) {
  const x = new Array(valor);
  for (let i = 0; i < valor; i++) {
    x[i] = new Array(valor).fill(0);
  }
  return x;
}

console.log(dosDimensiones(5));
