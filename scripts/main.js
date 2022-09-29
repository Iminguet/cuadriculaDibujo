'use-strict';

// Inicio programa

// asignacion de variables
const container = document.getElementById('cuadricula');

const ladoCuadrado = undefined;

// TODO añadir user input y pasar valor por defecto 32px
// Dato del user input bajo la cuadricula de colores

const defaultLadoCuadrado = 40;

// Obtenemos la cantidad total de cuadrados que formarán la cuadricula.

const getCantidadTotalCuadrados = (lPx = defaultLadoCuadrado) => {
  console.log(lPx);
  const ancho = container.scrollWidth;
  const alto = container.scrollHeight;
  const cantidadAncho = parseInt(ancho / lPx);
  const cantidadAlto = parseInt(alto / lPx);
  const cantidadCuadrados = cantidadAlto * cantidadAncho;
  console.log(
    `Hay un total de ${cantidadCuadrados} cuadrados grandes y un total de ${
      cantidadCuadrados * 4
    } cuadrados pequeños`
  );
  return cantidadCuadrados;
};

// Creación de elementos. Cuadrados grandes.
const creacionCuadrados = (nº, lPx) => {
  const cuadrado = document.createElement('div');
  const nombreCuadrado = 'cuadradoUnitarioNº';
  const nombreDefinitivo = `${nombreCuadrado}${nº}`;
  cuadrado.className = 'estiloCuadrado';
  cuadrado.style.cssText = `width:${lPx}px;height: ${lPx}px`;
  cuadrado.id = `${nombreDefinitivo}`;
  // cuadrado.setAttribute('draggable', 'true');
  // cuadrado.setAttribute('ondragstart', 'onDragStart(event)');
  cuadrado.setAttribute('ondrop', 'drop(event)');
  container.appendChild(cuadrado);
  return nombreDefinitivo;
};

// Creación de elementos. Cuadrados pequeños.
const creacionCuadraditos = (idCuadradoGrande, iteracion) => {
  const cuadrado = document.getElementById(`${idCuadradoGrande}`);
  const cuadradoId = cuadrado.id;
  const arrNombre = cuadradoId.split('cuadradoUnitario');
  const cuadraditos = document.createElement('div');
  cuadraditos.id = arrNombre[1] + iteracion;
  cuadrado.appendChild(cuadraditos);
  cuadraditos.className = 'cuadradosInteriores';
  cuadraditos.setAttribute('draggable', 'true');
  cuadraditos.setAttribute('ondragover', 'allowDrop(event)');
  cuadraditos.setAttribute('ondragstart', 'dragPeques(event)');
  cuadraditos.setAttribute('ondragenter', 'entrando(event)');
  cuadraditos.setAttribute('mousedown', 'pulsacion(event)');
  cuadraditos.setAttribute('ondrop', 'droping(event)');
};

// Creación de elementos. Cuadricula.
const creacionCuadricula = (totales, lPx = defaultLadoCuadrado) => {
  for (let i = 0; i < totales; i++) {
    const id = creacionCuadrados(i, lPx);

    for (let j = 0; j < 4; j++) {
      creacionCuadraditos(id, j);
    }
  }
};

//Llamada a función
const totales = getCantidadTotalCuadrados(ladoCuadrado);

creacionCuadricula(totales, ladoCuadrado);

/*
setAttribute???
1- Clicamos sobre un color y obtenemos su clase
2- Al pasar por encima de un cuadradito pequeño con hover pintamos el cuadro con el color
de La clqse obtenido en 1.
3- Al arrastrar, pintamos todos los cuadrados con ese color.
4- Al apretar borrar, eliminamos la clase de lo que seleccionemos
5- Borrar todo, limpia toda la cuadricula
6- // TODO // Sumar todos los cuadrados
7- // TODO // Sumar los cuadraditos pintados.
8- Mostrarlo en estadisticas

*/

// container.addEventListener('dragover', (e) => {
//   e.preventDefault();
//   e.dataTransfer.id;
// });

// container.addEventListener('dragstart', (e) => {
//   e.dataTransfer.setData('id', e.target.id);
// });

const drag = (ev) => {
  ev.dataTransfer.setData('text', ev.target.classList[1]);
  // console.log('arrastrando...', ev.target.classList[1]);
};

const drop = (ev) => {
  ev.preventDefault();
  let clase = ev.dataTransfer.getData('text');
  ev.target.classList.add(clase);
  console.log(clase);
  const ejeX = ev.clientX;
  const ejeY = ev.clientY;
  console.log(ejeX, ejeY);
  pintarAledaños(ejeX, ejeY, clase);
};

const pintarAledaños = (x, y, clase, lado = defaultLadoCuadrado) => {
  const arrayCoordenadas = [
    [x, y],
    [x, y - lado / 2],
    [x, y + lado / 2],
    [x - lado / 2, y],
    [x - lado / 2, y - lado / 2],
    [x - lado / 2, y + lado / 2],
    [x + lado / 2, y],
    [x + lado / 2, y + lado / 2],
    [x + lado / 2, y - lado / 2],
  ];
  arrayCoordenadas.map((coordenadas) => {
    const x = coordenadas[0];
    const y = coordenadas[1];
    const elem = document.elementFromPoint(x, y);
    elem.classList.remove(elem.classList[1]);
    elem.classList.add(`${clase}`);
  });
};

//mousedown
const pulsacion = (ev) => {
  // ev.dataTransfer.setData('class', ev.target.classList[1]);
  // const clase = ev.target.classList[1];
  console.log('pulso');
};
//ondragstart
// const dragPeques = (ev) => {

// };

//ondragover
const allowDrop = (ev) => {
  ev.preventDefault();
};

//ondrag
// const recorriendo = (ev) => {
//   const clase = ev.target.classList[1];
//   console.log(clase);
// };

//ondragenter
const entrando = (ev) => {
  let clase = ev.dataTransfer.getData('class');
  // console.log(`this is clase===> ${clase}`);
  // console.log('entro por aquí');
};

const borrar = () => {
  const clases = document.getElementsByClassName('cuadradosInteriores');
  for (let i = 0; i < totales * 4; i++) {
    clases[i].classList.remove(clases[i].classList[1]);
    // clases[i].classList.add(clases[i].classList);
  }
};

const cambiarModo = () => {
  container.classList.toggle('luz');
  container.classList.toggle('noche');
};
