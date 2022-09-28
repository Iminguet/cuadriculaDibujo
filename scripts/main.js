'use-strict';

// Inicio programa

// asignacion de variables
const container = document.getElementById('cuadricula');

const ladoCuadrado = parseInt(prompt('Px'));

// TODO añadir user input y pasar valor por defecto 32px
// Dato del user input bajo la cuadricula de colores

const defaultLadoCuadrado = 16;

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

container.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.id;
});

container.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('id', e.target.id);
});

const drag = (ev) => {
    ev.dataTransfer.setData('text', ev.target.classList[1]);
    console.log('arrastrando...', ev.target.classList[1]);
};

const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData('text');
    console.log(`Esta es la clase ${data}`);
    console.log(data);
    ev.target.classList.add(data);
    console.log(ev.target.classList);

    const ejeX = ev.clientX;
    const ejeY = ev.clientY;

    console.log(ejeX, ejeY);

    pintarAledaños(ejeX, ejeY, data);
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
        // elem.setAttribute('class', `${clase} !important`);
        elem.classList.add(`${clase}`);
    });
};

// function onDragStart(e) {
//     target.dataTransfer.classList.add(e);
// }
/*
container.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.target.classList.remove('pasando');
});


container.addEventListener('drop', (e) => {
    e.target.classList.remove('pasando');
});..

*/

/*
// const tomarColor = (e) => {
//     const element = document.getElementById(e);
//     console.log(element);
//     element.addEventListener('ondrag', (e) => {
//         console.log('nano');
//         e.dataTransfer.setData('id', e.target.id);
//     });
// 
}*/