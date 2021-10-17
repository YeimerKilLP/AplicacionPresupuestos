class Ingresos extends Dato {
  static contadorIngresos = 0;

  constructor(description, valor) {
    super(description, valor);
    this._id = ++Ingresos.contadorIngresos;
  }

  get id() {
    return this._id;
  }
}
