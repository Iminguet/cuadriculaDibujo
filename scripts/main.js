'use-strict';

// Inicio programa

// asignacion de variables
const ladoCuadrado = 32; // TODO añadir user input y pasar valor por defecto 32px
const container = document.getElementById('cuadricula');
const ancho = container.scrollWidth;
const alto = container.scrollHeight;
const cantidadAncho = parseInt(ancho / ladoCuadrado);
const cantidadAlto = parseInt(alto / ladoCuadrado);
const cantidadCuadrados = cantidadAlto * cantidadAncho;

// eventos de mouse
const drag = (ev) => {
    ev.dataTransfer.setData('text', ev.target.id);
    console.log('arrastrando...', ev.target.id);
};
const allowDrop = (ev) => {
    ev.preventDefault();
};

const drop = (ev) => {
    ev.preventDefault(ev);
    let data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
};

// Asignamos ID a cada cuadrado
const nombreCuadrado = 'cuadradoUnitarioNº';
let numeroCuadrado = 0;
let nombreDefinitivo = `${nombreCuadrado}${numeroCuadrado}`;

/*
Pintamos cuadrados del tamaño dado con la const ladoCuadrado 
con un bucle for, durante toda la pantalla
Aquí tb asigamos clases. id y pintamos cuadrados dentro de cuadrados.

/// TODO, refactorizar esto con funciones /// 

*/
for (let i = 0; i < cantidadCuadrados; i++) {
    let cuadrado = document.createElement('div');
    cuadrado.className = 'estiloCuadrado';
    cuadrado.style.cssText = `width:${ladoCuadrado}px;height: ${ladoCuadrado}px`;
    numeroCuadrado++;
    nombreDefinitivo = `${nombreCuadrado}${numeroCuadrado}`;
    cuadrado.setAttribute('id', `${nombreDefinitivo}`);
    cuadrado.setAttribute('draggable', 'true');
    cuadrado.setAttribute('ondragstart', 'drag(event)');
    container.appendChild(cuadrado);
    for (let j = 0; j < 4; j++) {
        let cuadraditos = document.createElement('div');
        cuadrado.appendChild(cuadraditos);
        cuadraditos.classList.add('cuadradosInteriores');
        cuadraditos.setAttribute('draggable', 'true');
    }
}
console.log(ancho);
console.log(alto);