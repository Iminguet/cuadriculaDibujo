'use-strict';

// Inicio programa

// asignacion de variables
const container = document.getElementById('cuadricula');
const defaultLadoCuadrado = 16;
const ladoCuadrado = undefined; // TODO añadir user input y pasar valor por defecto 32px
// Dato del user input bajo la cuadricula de colores

// entra el numero de px por cubo
// devuelve el tamaño de la cuadricula
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

const creacionCuadrados = (nº, lPx) => {
    const cuadrado = document.createElement('div');
    const nombreCuadrado = 'cuadradoUnitarioNº';
    const nombreDefinitivo = `${nombreCuadrado}${nº}`;
    cuadrado.className = 'estiloCuadrado';
    cuadrado.style.cssText = `width:${lPx}px;height: ${lPx}px`;
    cuadrado.id = `${nombreDefinitivo}`;
    cuadrado.setAttribute('draggable', 'true');
    cuadrado.setAttribute('ondragstart', 'onDragStart(event)');
    container.appendChild(cuadrado);
    return nombreDefinitivo;
};

const creacionCuadraditos = (idCuadradoGrande, iteracion) => {
    const cuadrado = document.getElementById(`${idCuadradoGrande}`);
    const cuadradoId = cuadrado.id;
    const arrNombre = cuadradoId.split('cuadradoUnitario');
    const cuadraditos = document.createElement('div');
    cuadraditos.id = arrNombre[1] + iteracion;
    cuadrado.appendChild(cuadraditos);
    cuadraditos.className = 'cuadradosInteriores';
    cuadraditos.setAttribute('draggable', 'true');
    cuadraditos.setAttribute('ondrop', 'drop(event)');
    cuadraditos.setAttribute('ondragover', 'onDragOver(event)');
};

const creacionCuadricula = (totales, lPx = defaultLadoCuadrado) => {
    for (let i = 0; i < totales; i++) {
        const id = creacionCuadrados(i, lPx);

        for (let j = 0; j < 4; j++) {
            creacionCuadraditos(id, j);
        }
    }
};

const totales = getCantidadTotalCuadrados(ladoCuadrado);

creacionCuadricula(totales, ladoCuadrado);

/*
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
*/

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
const R1 = document.getElementById('R1');

const clasePe = document.getElementsByClassName('cuadradosInteriores');

function onDragStart(e) {
    // event.dataTransfer.setData('text/plain', event.target.id);
    console.log(e.dataTransfer.className);
}

function onDragOver(e) {
    e.preventDefault();
    e.target.classList.add('pasando');
}

function drop(event) {
    console.log('dop');
    event.getData;
}