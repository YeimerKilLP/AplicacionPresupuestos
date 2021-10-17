const ingresos = [
  new Ingresos("Salario", 2500.0),
  new Ingresos("Coche", 1500.0)
];

const egresos = [new Egreso("Renta", 600.0), new Egreso("Ropa", 600.0)];

let cargarApp = () => {
  cargarCabecero();
};

let totalIngresos = () => {
  let totalIngreso = 0;
  for (let ingreso of ingresos) {
    totalIngreso += ingreso.valor;
  }
  return totalIngreso;
};

let totalEgresos = () => {
  let totalEgreso = 0;
  for (let egreso of egresos) {
    totalEgreso += egreso.valor;
  }
  return totalEgreso;
};

let cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();

  let porcentajeEgresos = totalEgresos() / totalIngresos();

  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =formatoPorcentaje (porcentajeEgresos);
  document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

//Formato de la moneda y porcentaje con JS

const formatoMoneda = (valor) => {
  return valor.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  });
};


//Porcentaje

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString('es-MX', {
    style: 'percent',
    minimumFractionDigits: 2
  })
}
