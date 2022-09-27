// const cubo = document.getElementById('kilo');
// const cubo2 = document.getElementById('NANO');

// cubo.addEventListener('click', (e) => {
//     // console.log(e);
//     console.log('ejeX', e.clientX);
//     console.log('ejeY', e.clientY);
//     // console.log(e.layerX);
//     // console.log(e.layerY);
//     // console.log(e.screenX);
//     // console.log(e.screenY);
//     // console.log(e.X);
//     // console.log(e.Y);
// });

// cubo2.addEventListener('click', (e) => {
//     // console.log(e);
//     console.log('ejeX', e.clientX);
//     console.log('ejeY', e.clientY);

//     let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
//     elemBelow.classList.add('nano');
//     // console.log(e.layerX);
//     // console.log(e.layerY);
//     // console.log(e.screenX);
//     // console.log(e.screenY);
//     // console.log(e.X);
//     // console.log(e.Y);
// });

// cubo2.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
//     let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
//     elemBelow.classList.remove('nano');
// });

// // cubo2.addEventListener('ondrop', () => {
// //     console.log('soltado');
// // });

// const cubito = document.getElementById('cubito');

// cubito.addEventListener('ondragover', (e) => {
//     e.preventDefault();
//     console.log('encima');
// });
let x = 0;
let y = 0;

const arrayCoordenadas = [
    [x, y],
    [x, y - 8],
    [x, y + 8],
    [x - 8, y],
    [x - 8, y - 8],
    [x - 8, y + 8],
    [x + 8, y],
    [x + 8, y + 8],
    [x + 8, y - 8],
];

arrayCoordenadas.map((cada) => {
    const x = cada[0];
    const y = cada[1];
    const elem = document.elementFromPoint(x, y);
    elem.classList.add('pasando');
});

/*
const pintarAledaños = (x, y) => {
    const arrayCoordenadas = [
        [x, y],
        [x, y - 8],
        [x, y + 8],
        [x - 8, y],
        [x - 8, y - 8],
        [x - 8, y + 8],
        [x + 8, y],
        [x + 8, y + 8],
        [x + 8, y - 8],
    ];

    for (let i = 0; i < arrayCoordenadas.length; i++) {
        let elem = document.elementFromPoint(x, y - 8);
        elem.classList.add('pasando');
    }
*/