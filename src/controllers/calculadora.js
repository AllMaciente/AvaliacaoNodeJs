const { json } = require("express");
const ServiceCalculadora = require("../services/calculadora");

class ControllerCalculadora {
  info(req, res) {
    res.json({
      msg: "todos precisão de um body contendo as informações numb1 para o primeiro numero e numb2 para o segundo numero",
      routes: [
        "/somar",
        "/subtrair",
        "/multiplicar",
        "/dividir",
        "/potencia",
        "/raiz",
      ],
      body: { numb1: 15, numb2: 3 },
    });
  }
  Somar(req, res) {
    try {
      const { numb1, numb2 } = req.body;
      const result = ServiceCalculadora.Somar(numb1, numb2);
      res.json({ result });
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
  Diminuir(req, res) {
    try {
      const { numb1, numb2 } = req.body;
      const result = ServiceCalculadora.Diminuir(numb1, numb2);
      res.json({ result });
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
  Multiplicar(req, res) {
    try {
      const { numb1, numb2 } = req.body;
      const result = ServiceCalculadora.Multiplicar(numb1, numb2);
      res.json({ result });
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
  Dividir(req, res) {
    try {
      const { numb1, numb2 } = req.body;
      const result = ServiceCalculadora.Dividir(numb1, numb2);
      res.json({ result });
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
  Potencia(req, res) {
    try {
      const { numb1, numb2 } = req.body;
      const result = ServiceCalculadora.Potencia(numb1, numb2);
      res.json({ result });
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
  Raiz(req, res) {
    try {
      const { numb1, numb2 } = req.body;
      const result = ServiceCalculadora.Raiz(numb1, numb2);
      res.json({ result });
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
}
module.exports = new ControllerCalculadora();
