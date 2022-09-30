![License](https://img.shields.io/github/license/Iminguet/cuadriculaDibujo.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/Iminguet/cuadriculaDibujo.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/Iminguet/cuadriculaDibujo.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/Iminguet/cuadriculaDibujo.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/Iminguet/cuadriculaDibujo.svg?style=for-the-badge)

# Cuadricula de dibujo.

<img src="img/holaMundo.png" />

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a>

## Índice

- [Cuadricula de dibujo.](#cuadricula-de-dibujo)
  - [Índice](#índice)
  - [Descripción](#descripción)
  - [Inicio y final](#inicio-y-final)
  - [Para empezar](#para-empezar)
    - [Prerrequisitos](#prerrequisitos)
    - [Deployment](#deployment)
  - [Uso](#uso)
  - [Bugs conocidos](#bugs-conocidos)
  - [Mejoras](#mejoras)
  - [Licencia](#licencia)
  - [Contacto](#contacto)

## Descripción

Cuadrícula de dibujo que te permite arrastrar cubos de colores de distintos tamaños y crear composiciones sencillas.
Este proyecto es el entregable final del Bootcamp de programación impartido por
<a href="https://geekshubsacademy.com/">GeeksHubs academy</a> y realizado en <a href="https://www.urbalabgandia.com/es/inicio/">Urbalab Gandia</a> en septiembre de 2022.

## Inicio y final

Primer commit realizado el día 20/09/2022.
Último commit realizado el día 30/09/2022.

## Para empezar

Este es un sencillo proyecto realizado con Vainilla JS.

### Prerrequisitos

Navegador web.

### Deployment

https://iminguet.github.io/dinamicShowCase

## Uso

Para empezar a dibujar, primero elige el tamaño del pincel de entre las opciones que se dan en la parte inferior izquierda de la aplicación.

<img src="./img/pinceles.png" />

Arrastra el color que quieras a la cuadricula y suelta, el color se ubicará en relación al puntero del ratón.

<img src="./img/flechainit.png" />
<img src="./img/flechaFin.png" />

Si quieres replicar ese color, puedes arrastrar desde ese mismo elemento y al soltar, de igual forma, pintará la cuadricula.

<img src="./img/arrastre.png" />

Tambien puedes cambiar el tamaño del pincel antes de arrastrar.

<img src="./img/guiaArrastre.png" />

El programa admite que los colores se superpongan.

Cambia entre modo oscuro y modo claro pulsando el botón "MODO OSCURO/CLARO".

<img src="./img/claroscuro.png" />

Pulsa borrar para... oh si, borrar toda la cuadricula.

## Bugs conocidos

Al usar un posicionamiento por coordenadas X/Y respecto al puntero del ratón, el usuario puede encontrar que en ocasiones la respuesta no es la esperada. El cálculo de coordenadas está realizado manualmente y al programa se le indica que añada la clase al elemento que se encuentra en esa misma posición. Así que dependiendo de en que zona del cuadro pequeño se realice el drop, el mismo pincel puede arrojar distintos resultados.

<img src="./img/coordenadas(1).png">

## Mejoras

Correción de bugs.
Se implementará la funcionalidad del dibujo en sí, sin el uso de cuadrículas sobre las que ahora mismo añadimos clases.
Se implementará que al activar el evento de arrastre, se pinte todo a su paso.

## Licencia

<a href="https://creativecommons.org/publicdomain/zero/1.0/"><img src="https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/cczero.svg" height=40 />Creative Commons Zero v1.0 Universal</a>

## Contacto

<a href="https://www.linkedin.com/in/https://www.linkedin.com/in/israelminse/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a> <a href="mailto:i.minguetsegui@gmail.com"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>
