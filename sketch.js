
// 2016 07 20 workshop p5 y fundamentos.
// elipse que sigue al mouse
// p5, biblioteca de funciones.
// podmos importar otras bibliotecas d javascript
// las funciones en rojo son nativas de p5
// el resto es Javascript puro.
// library/biblioteca de javascript, eso es p5, accesible
// proccessing y p5JS tienen referencias.

// aaronmontoya.cl
// https://github.com/processing/p5.js/wiki/Processing-transition
// three.js
// se levanta un servidor local para usar funciones mas complejas.
// loafFile()

//vars
//declarar variables
var diametro;
diametro = 50;

//vars glbales fuera d la funcion, 
//variables locales dentro de una funcion.

// setup se ejecuta una vez al inicio de la App.
function setup() {
  // crea el lienzo (dimH, dim)
  createCanvas(600, 600);
  // podemos ejecutar las funciones en la consola del browser, es interactivo.
  background(0, 255, 0);
}

//declaramos una funcion
function estiloElipse() {
  strokeWeight(10);
  stroke(210, 0, 100);
  fill(255, 255, 0);
}

function estiloElipse2() {
  strokeWeight(10);
  stroke(210, 0, 100);
  fill(255, 255, 0);
}

//se ejecuta despues d setup, 60 times x sec, loop infinito.
function draw() {
  // declare local var
  var anchoBorder = 10;
  // ellipse(posx px, posy px, width px, height px)
  // ellipse(100, 50, 30, 40);
  // pincel por default: borde negro, fill white, border 1ox ancho.
  //noFill();
  // antes de dibujar, definimos el pincel: tamano del borde
  //strokeWeight(px);
  // background(0, 255, 0);
  // strokeWeight(anchoBorder);
  // stroke(210, 0, 100);
  
  //fill()
  // fill(255, 255, 0);
  estiloElipse();
  ellipse(mouseX, mouseY, 30, 40);
  ellipse(100, 200, diametro , diametro);
  //diametro++;

}
