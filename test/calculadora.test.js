const ServiceCalculadora = require("../src/services/calculadora");
const { describe, it, expect } = require("@jest/globals");

describe("Testar função Somar", () => {
  it("Somar 1 e 2", () => {
    const result = ServiceCalculadora.Somar(1, 2);

    expect(result).toBe(3);
  });
  it("Somar 1 e -2", () => {
    const result = ServiceCalculadora.Somar(1, -2);

    expect(result).toBe(-1);
  });
  it("Somar -1 e 2", () => {
    const result = ServiceCalculadora.Somar(-1, 2);

    expect(result).toBe(1);
  });
  it("Somar 10 e 20", () => {
    const result = ServiceCalculadora.Somar(10, 20);

    expect(result).toBe(30);
  });
  it("Somar 10 e -20", () => {
    const result = ServiceCalculadora.Somar(10, -20);

    expect(result).toBe(-10);
  });
  it("Somar -10 e 20", () => {
    const result = ServiceCalculadora.Somar(-10, 20);

    expect(result).toBe(10);
  });
  it("Somar 1 e 0", () => {
    const result = ServiceCalculadora.Somar(1, 0);

    expect(result).toBe(1);
  });
  it("Somar 0 e 2", () => {
    const result = ServiceCalculadora.Somar(0, 2);

    expect(result).toBe(2);
  });
  it("Somar 0 e -2", () => {
    const result = ServiceCalculadora.Somar(0, -2);

    expect(result).toBe(-2);
  });
  it("Somar -1 e 0", () => {
    const result = ServiceCalculadora.Somar(-1, 0);

    expect(result).toBe(-1);
  });
  it("Somar 1 e -0", () => {
    const result = ServiceCalculadora.Somar(1, -0);

    expect(result).toBe(1);
  });
  it("Somar -0 e 2", () => {
    const result = ServiceCalculadora.Somar(-0, 2);

    expect(result).toBe(2);
  });
  it("Somar a e 2", () => {
    expect(() => {
      ServiceCalculadora.Somar("a", 2);
    }).toThrow("Informe Apenas Numeros");
  });
  it("Somar 1 e b", () => {
    expect(() => {
      ServiceCalculadora.Somar(1, "b");
    }).toThrow("Informe Apenas Numeros");
  });
});

describe("Testar função Diminuir", () => {
  it("Diminuir 5 2", () => {
    const result = ServiceCalculadora.Diminuir(5, 2);
    expect(result).toBe(3);
  });
  it("Diminuir 2 5", () => {
    const result = ServiceCalculadora.Diminuir(2, 5);
    expect(result).toBe(-3);
  });
  it("Diminuir 20 5", () => {
    const result = ServiceCalculadora.Diminuir(20, 5);
    expect(result).toBe(15);
  });
  it("Diminuir 0 2", () => {
    const result = ServiceCalculadora.Diminuir(0, 2);
    expect(result).toBe(-2);
  });
  it("Diminuir 5 0", () => {
    const result = ServiceCalculadora.Diminuir(5, 0);
    expect(result).toBe(5);
  });
  it("Diminuir a 2", () => {
    expect(() => {
      ServiceCalculadora.Diminuir("a", 2);
    }).toThrow("Informe Apenas Numeros");
  });
  it("Diminuir 5 b", () => {
    expect(() => {
      ServiceCalculadora.Diminuir(5, "b");
    }).toThrow("Informe Apenas Numeros");
  });
});

describe("Testar função Multiplicar", () => {
  it("multiplicar 2 5", () => {
    const result = ServiceCalculadora.Multiplicar(2, 5);

    expect(result).toBe(10);
  });
  it("multiplicar 5 2", () => {
    const result = ServiceCalculadora.Multiplicar(5, 2);

    expect(result).toBe(10);
  });
  it("multiplicar 15 6", () => {
    const result = ServiceCalculadora.Multiplicar(5, 2);

    expect(result).toBe(10);
  });
  it("multiplicar 0 5", () => {
    const result = ServiceCalculadora.Multiplicar(0, 5);

    expect(result).toBe(0);
  });
  it("multiplicar a 5", () => {
    expect(() => {
      ServiceCalculadora.Multiplicar("a", 5);
    }).toThrow("Informe Apenas Numeros");
  });
  it("multiplicar 2 b", () => {
    expect(() => {
      ServiceCalculadora.Multiplicar(2, "b");
    }).toThrow("Informe Apenas Numeros");
  });
});

describe("Testar função Dividir", () => {
  it("Dividir 10 2", () => {
    const result = ServiceCalculadora.Dividir(10, 2);

    expect(result).toBe(5);
  });
  it("Dividir 10 5", () => {
    const result = ServiceCalculadora.Dividir(10, 5);

    expect(result).toBe(2);
  });
  it("Dividir 0 5", () => {
    expect(() => {
      ServiceCalculadora.Dividir(0, 5);
    }).toThrow("nao pode conter zero");
  });
  it("Dividir 2 0", () => {
    expect(() => {
      ServiceCalculadora.Dividir(2, 0);
    }).toThrow("nao pode conter zero");
  });
  it("Dividir a 5", () => {
    expect(() => {
      ServiceCalculadora.Dividir("a", 5);
    }).toThrow("Informe Apenas Numeros");
  });
  it("Dividir 2 b", () => {
    expect(() => {
      ServiceCalculadora.Dividir(2, "b");
    }).toThrow("Informe Apenas Numeros");
  });
});

describe("Testar função Potencia", () => {
  it("Potencia 4 2", () => {
    const result = ServiceCalculadora.Potencia(4, 2);

    expect(result).toBe(16);
  });
  it("Potencia 4 3", () => {
    const result = ServiceCalculadora.Potencia(4, 3);

    expect(result).toBe(64);
  });
  it("Potencia 4 0", () => {
    const result = ServiceCalculadora.Potencia(4, 0);

    expect(result).toBe(1);
  });
  it("Potencia 0 0", () => {
    const result = ServiceCalculadora.Potencia(0, 0);

    expect(result).toBe(1);
  });
  it("Potencia 0 3", () => {
    const result = ServiceCalculadora.Potencia(0, 3);

    expect(result).toBe(0);
  });
  it("Potencia a 5", () => {
    expect(() => {
      ServiceCalculadora.Potencia("a", 5);
    }).toThrow("Informe Apenas Numeros");
  });
  it("Potencia 2 b", () => {
    expect(() => {
      ServiceCalculadora.Potencia(2, "b");
    }).toThrow("Informe Apenas Numeros");
  });
});

describe("Testar função Raiz", () => {
  it("Raiz 9 2", () => {
    const result = ServiceCalculadora.Raiz(9, 2);

    expect(result).toBe(3);
  });
  it("Raiz 6 2", () => {
    const result = ServiceCalculadora.Raiz(6, 2);

    expect(result).toBe(2.4495);
  });
  it("Raiz 0 2", () => {
    const result = ServiceCalculadora.Raiz(0, 2);

    expect(result).toBe(0);
  });
  it("Raiz 15 5", () => {
    const result = ServiceCalculadora.Raiz(15, 5);

    expect(result).toBe(1.7188);
  });

  it("Raiz a 5", () => {
    expect(() => {
      ServiceCalculadora.Raiz("a", 5);
    }).toThrow("Informe Apenas Numeros");
  });
  it("Raiz 2 b", () => {
    expect(() => {
      ServiceCalculadora.Raiz(2, "b");
    }).toThrow("Informe Apenas Numeros");
  });
});
