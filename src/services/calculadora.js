class ServiceCalculadora {
  Somar(numb1, numb2) {
    if (isNaN(numb1) || isNaN(numb2)) {
      throw new Error("Informe Apenas Numeros");
    }
    return numb1 + numb2;
  }

  Diminuir(numb1, numb2) {
    if (isNaN(numb1) || isNaN(numb2)) {
      throw new Error("Informe Apenas Numeros");
    }
    return numb1 - numb2;
  }

  Multiplicar(numb1, numb2) {
    if (isNaN(numb1) || isNaN(numb2)) {
      throw new Error("Informe Apenas Numeros");
    }
    return numb1 * numb2;
  }

  Dividir(numb1, numb2) {
    if (numb1 == 0 || numb2 == 0) {
      throw new Error("nao pode conter zero");
    }
    if (isNaN(numb1) || isNaN(numb2)) {
      throw new Error("Informe Apenas Numeros");
    }
    return numb1 / numb2;
  }

  Potencia(numb1, numb2) {
    if (isNaN(numb1) || isNaN(numb2)) {
      throw new Error("Informe Apenas Numeros");
    }
    if (numb2 == 0) {
      return 1;
    }
    var final = numb1;
    for (let index = 1; index < numb2; index++) {
      final = final * numb1;
    }
    return final;
  }

  Raiz(numb1, numb2) {
    if (isNaN(numb1) || isNaN(numb2)) {
      throw new Error("Informe Apenas Numeros");
    }
    const raiz = numb1 ** (1 / numb2);

    if (raiz % 1 != 0 && !isNaN(raiz % 1)) {
      return parseFloat(raiz.toFixed(4));
    }

    return raiz;
  }
}

module.exports = new ServiceCalculadora();
