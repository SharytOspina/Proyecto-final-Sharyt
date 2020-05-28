var valoringresado=prompt ("Desde que año quiere saber los años bisiestos");

//Se hace el ciclo para que empiece desde el valor ingresado hasta el año 2020
for(i=valoringresado; i<=2020; i++){

	// si al dividir la variable contadora con 4 el residuo es cero 
	if (i%4==0){
		//imprimir los años bisiestos que cumplen la condicion
		document.write(i+ " Es bisiesto"+"<br>");
	}

}

//se declara la variable j donde el año de terminacion menos 1restado a su vez por el valor ingresado
var j=(((i-1)-valoringresado)/4);
//declaramos otra variable para el resultado de j quitarle los decimales
var h=j.toFixed();
//se imprime la variable h
document.write("Son "+h+ " años bisiestos.");