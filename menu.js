
//Para ocultar o aparecer el menu

$(document).ready(main);// cuando el documeto este listo vamos a ejecutar la funcion main se pone esto por que los scripts estan al inicio del index
 
var contador = 1; //crear la variable contador que se va a usar en la funcion main

function main(){
	$('.menu_bar').click(function(){ //manejador de eventon para que cuando le den click al menu se active
		// $('nav').toggle(); // aparece y desaparece el menu pero muy rapido
 
		if(contador == 1){ //si contador esta en 1 significa que esta oculto
			$('nav').animate({
				left: '0'
			});
			contador = 0; //cuando el usuario le de click al menu lo muestra y hace que la var contador quede en cero
		} else { //si el contador es cero cuando vuelva a dar click desaparece el menu
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}