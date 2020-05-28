//Ejemplo ciclo for 
document.write("for"+ ":"+ "<br>");

for (i =0; i <=10; i+=2) {
	
	document.write(i + "<br>");
}

document.write("<br>");

// Ejemplo de foreach
//Itera solo sobre cosas que existen
document.write("forEach"+ ":"+ "<br>");

var deportes= ["Futbol", "Baloncesto", "Tenis"];


 deportes.forEach(function (elemento, indice, array) {
 	
    document.write(indice, ") ", elemento);
    document.write("<br>");
});
