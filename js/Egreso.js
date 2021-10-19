class Egresos extends Dato {
  static contadorEgresos = 0;
  constructor(description, valor) {
    super(description, valor);

    this._id = ++Egresos.contadorEgresos;
  }
  get id() {
    return this._id;
  }
}
