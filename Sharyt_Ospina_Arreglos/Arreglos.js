//Este documento es mi trabajo sobre arreglos y sus variantes
//Hecho por Sharyt D. Ospina el dia 04-marzo-2020


//Declaración de un arreglo

//Se declara una variable y se asigna al arreglo

var fruta=[];
document.write("Que tiene el arreglo de fruta: " +fruta + "Esta vacio" + "<br>");
//Segunda declarar una variable y se asigna ala arreglo
var fruta= new Array();
fruta=["Guama"];
//Ahora fruta tiene Guama

document.write("<br> Que tiene ahora el arreglo de fruta: ", fruta + "<br>");

//Voy a llenar un nuevo arreglo con muchas frutas
var frutas= ["Manzanas", " Bananos", " Piñas", " Naranjas", " Peras"];

//Lo voy a mostrar el arreglo en pantalla
document.write("<br> Estas son las frutas del arreglo: " + frutas+"<br>");

//Voy a escoger una fruta del arreglo
document.write("<br> Esta es la fruta escogida del arreglo: " +frutas[2]+ "<br>");
document.write("<br> Estas son las frutas escogidas del arreglo: "+ frutas[0]+", "+frutas[4]+"<br>" );
//la ", " es para que cada vez que ponga un elemento queda separado de la coma

//Quiero saber cual es mi primera fruta
var primero=frutas[0];

//Quiero saber cual es la ultima fruta de mi arreglo

var ultima=frutas [frutas.length -1];
// el -1 es para medir el arreglo correctamente poque empieza a contar desde cero y sin el -1 tendria un valor de mas

document.write("<br> Esta es la primera fruta de mi arreglo: " +primero+"<br>");
document.write("Esta es la ultima fruta de mi arreglo: " +ultima+"<br>");

//Añadir un elemento al final del arreglo

var nuevalongitud= frutas.push(' Papaya');

//Aqui muestro el tamaño de mi arreglo y los elementos del mismo despues de haberle adicionado Papaya
document.write("<br> Esta es la ultima longitud del arreglo de frutas: " +nuevalongitud+"<br>");

//De esta manera muestro el arreglo actual (agregandole papaya)
document.write("<br> El arreglo actualizado es : " +frutas+"<br>");


//Aqui añadi dos elementos al final del arreglo que son limon y feijoa
var nuevalongitud= frutas.push(' Limón', ' Feijoa');

//Aqui muestro el tamaño de mi arreglo despues de haberle agregado los dos elementos 
document.write("<br> Esta es la ultima longitud del arreglo de frutas: " +nuevalongitud+"<br>");

//De esta manera muestro los elementos del arreglo actual (agregandole Limón y Feijoa)
document.write("<br> El arreglo actualizado es : " +frutas+"<br>");



//Eliminar un elemento del arreglo
var ultima= frutas.pop();
document.write("<br> Esta es la ultima fruta de mi arreglo: " +ultima);


