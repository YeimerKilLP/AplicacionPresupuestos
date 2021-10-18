const ingresos = [
  new Ingresos("Sueldo", 3000.0),
  new Ingresos("Coche", 1500.0),
  new Ingresos("Paypal", 2500.00)
];

const egresos = [new Egreso("Renta", 600.0), new Egreso("Ropa", 600.0)];

let cargarApp = () => {
  cargarCabecero();
  cargarIngresos();
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


//Funciones para cargar los ingresos

const cargarIngresos =()=> {
  let ingresosHTML ='';
  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresosHTML(ingreso);

  }
  document.getElementById ('lista-ingresos').innerHTML =ingresosHTML;
}

let crearIngresosHTML =(ingreso)=> {
  let ingresoHTML = `<div class="elemento limpiarEstilos">
  <div class="elemento_descripcion">${ingreso.description}</div>
  <div class="derecha">
    <div class="elemento_valor">${formatoMoneda (ingreso.valor)}</div>
    <div class="elemento_eliminar">
      <button class="elemento_eliminar--btn">
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    </div>
  </div>
</div>`;

return ingresoHTML;
}