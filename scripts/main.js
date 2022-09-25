'use-strict';

// Inicio programa
// asignacion de variables
const container = document.getElementById('cuadricula');

const defaultLadoCuadrado = 32;
const ladoCuadrado = undefined; // TODO añadir user input y pasar valor por defecto 32px
// Dato del user input bajo la cuadricula de colores

// entra el numero de px por cubo
// devuelve el tamaño de la cuadricula
const cantidadTotal = (lPx = defaultLadoCuadrado) => {
    console.log(lPx, 'Poje');
    const ancho = container.scrollWidth;
    const alto = container.scrollHeight;
    const cantidadAncho = parseInt(ancho / lPx);
    const cantidadAlto = parseInt(alto / lPx);
    const cantidadCuadrados = cantidadAlto * cantidadAncho;
    return cantidadCuadrados;
};

const totales = cantidadTotal(ladoCuadrado);
console.log(totales);
// Asignamos ID a cada cuadrado

// entra el número de id y el tamaño del lado
// devuelve el nombre del cuadrado
const creacionCuadrados = (nº, lPx = defaultLadoCuadrado) => {
    let cuadrado = document.createElement('div');
    cuadrado.className = 'estiloCuadrado';
    cuadrado.style.cssText = `width:${lPx}px;height: ${lPx}px`;
    const nombreCuadrado = 'cuadradoUnitarioNº';
    const nombreDefinitivo = `${nombreCuadrado}${nº}`;
    cuadrado.id = `${nombreDefinitivo}`;
    cuadrado.setAttribute('draggable', 'true');
    cuadrado.setAttribute('ondragstart', 'drag(event)');
    container.appendChild(cuadrado);
    //
    //
    //
    return nombreDefinitivo;
};

const creacionCuadraditos = (idCuadradoGrande, iteracion) => {
    let cuadrado = document.getElementById(`${idCuadradoGrande}`);
    let cuadradoId = cuadrado.id;
    console.log(cuadradoId);
    const arrNombre = cuadradoId.split('cuadradoUnitario');
    let cuadraditos = document.createElement('div');
    cuadraditos.id = arrNombre[1] + iteracion;
    cuadrado.appendChild(cuadraditos);
    cuadraditos.className = 'cuadradosInteriores';
    cuadraditos.setAttribute('draggable', 'true');
    cuadraditos.setAttribute('ondrop', 'drop(event)');
};
/*
Pintamos cuadrados del tamaño dado con la const ladoCuadrado 
con un bucle for, durante toda la pantalla
Aquí tb asigamos clases. id y pintamos cuadrados dentro de cuadrados.

/// TODO, refactorizar esto con funciones /// 


*/

// entra la cantidad de cuadrados que forma la cuadricula ** cantidadTotal(xx)**
// devulve cuadricula creada

const creacionCuadricula = (totales, lPx) => {
    for (let i = 0; i < totales; i++) {
        const id = creacionCuadrados(i, lPx);

        for (let j = 0; j < 4; j++) {
            creacionCuadraditos(id, j);
        }
    }
};

creacionCuadricula(totales, ladoCuadrado);