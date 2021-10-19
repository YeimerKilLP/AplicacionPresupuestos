const ingresos = [];

const egresos = [];

let cargarApp = () => {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
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
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeEgresos);
  document.getElementById("ingresos").innerHTML = formatoMoneda(
    totalIngresos()
  );
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

//Formato de la moneda y porcentaje con JS

const formatoMoneda = (valor) => {
  return valor.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  });
};

//Porcentaje

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("es-MX", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

//Funciones para cargar los ingresos

const cargarIngresos = () => {
  let ingresosHTML = "";
  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresosHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

let crearIngresosHTML = (ingreso) => {
  let ingresoHTML = `<div class="elemento limpiarEstilos">
  <div class="elemento_descripcion">${ingreso.description}</div>
  <div class="derecha">
    <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
    <div class="elemento_eliminar">
      <button class="elemento_eliminar--btn">
        <ion-icon name="trash-outline"
        onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
      </button>
    </div>
  </div>
</div>`;

  return ingresoHTML;
};

//Eliminar ingresos
const eliminarIngreso = (id) => {
  let indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id === id);
  ingresos.splice(indiceEliminar, 1);

  cargarCabecero();
  cargarIngresos();
};

//Funciones para agregar egresos

const cargarEgresos = () => {
  let egresosHTML = "";
  for (let egreso of egresos) {
    egresosHTML += crearEgresosHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = egresosHTML;
};

let crearEgresosHTML = (egreso) => {
  let egresoHTML = `<div class="elemento limpiarEstilos">
  <div class="elemento_descripcion">${egreso.description}</div>
  <div class="derecha limpiarEstilos">
    <div class="elemento_valor">- ${egreso.valor}</div>
    <div class="elemento_porcentaje"> 21%</div>
    <div class="elemento_eliminar">
      <button class="elemento_eliminar--btn">
        <ion-icon name="trash-outline"
        onclick='eliminarEgreso(${egreso.id})'></ion-icon>

      </button>
    </div>

  </div>
</div>`;
  return egresoHTML;
};
//Eliminar Egresos
let eliminarEgreso = (id) => {
  let indiceEliminar = egresos.findIndex((egreso) => egreso.id === id);
  egresos.splice(indiceEliminar, 1);

  cargarCabecero();
  cargarEgresos();
};

//Agregar datos generales

let agregarDato = () => {
  let forma = document.forms["forma"];

  let tipo = forma["tipo"];
  let description = forma["descripcion"];
  let valor = forma["valor"];

  if (description.value !== "" && valor.value !== "") {
    if (tipo.value === "ingreso") {
      ingresos.push(new Ingresos(description.value, +valor.value));
      cargarCabecero();
      cargarIngresos();
    } else if (tipo.value === "egreso") {
      egresos.push(new Egresos(description.value, +valor.value));
      cargarCabecero();
      cargarEgresos();
    }
  }
};
