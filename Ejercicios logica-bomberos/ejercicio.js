//Ejercicio bomberos

//declarar las variables que se van a usar
var dog=1, cat= 1, kid=1
//mensajes de inicio
alert('Los bomberos son llamados de emergencia a rescatar un niño un perro y un gato en un edificio que está en llamas. Todos están en un piso alto. El bombero tiene que escoger como rescatar a los tres individuos. Solo puede llevar uno a la vez. Sin embargo puede mantener un individuo en la escalera siempre. El perro y el gato tienen collar y se pueden amarrar. Pero el perro no se puede quedar con el gato porque se lo come. Ni tampoco con el niño porque lo muerde. Debes poder bajar a los tres uno por uno sin que pase lo anterior. ');

//Hacer el ciclo while para que se repita hasta que se cumpla la condicion
while(true){
	var d= prompt("A quien quieres mover? (las respuestas deben ir en minuscula)")
	if (d=="perro") {
		dog=dog*-1
	}else if(d=="gato"){
		if (dog==kid){
		alert('No puedes dejar al niño con el perro sin vigilancia')
	}else{
		cat=cat*-1
	}
}else if (d=="ni\361o") {
	if (dog==cat) {
		alert('No puedes dejar al gato con el perro sin vigilancia')
	}else{
		kid=kid*-1
	}
}else{
	alert('Comando invalido')
}
if (dog==cat && cat==kid && kid==-1) {
	alert('¡FELICIDADES, GANASTE!')
	break;
}
}