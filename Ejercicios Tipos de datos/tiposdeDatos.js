//Ejemplos tipos de dato

//String
document.write("String:"+ "<br>");
document.write("Comparar dos strings"+ "<br>");
  
  alert('Adivina el animal');
  alert('Es una animal grande que come pescado y vive en el polo norte');     

  
        var rta=prompt("Ingrese su respuesta en minusculas y con un espacio");
       
        if(rta=="oso polar"){
             document.write("Adivinaste, la respuesta es correcta");
        }else{
            document.write("Te equivocaste,la respuesta es incorrecta");
        }
        document.write("<br>");
         
//Boolean
document.write("<br>"+"Boolean:"+ "<br>");
document.write("El numero es par o impar"+ "<br>");


	var n1=prompt("Digite un número para saber si es par o impar ");
    var boolean;
    document.write("Numero evaluado: "+ n1 + "<br>");
    	//Compara, si el numero ingresado es par es verdadero y si es impar es falso
        if(n1%2==0){
           boolean=true; //variable de tipo boolean
        }else{
            boolean=false;
        }
        if(boolean==true){ //si el valor es verdadero imprime que el numero es par
            document.write("El número "+n1+" es " + boolean + " por lo tanto es par ");
        }else{ //si el valor es falso imprime que el numero es impar
            document.write("El número "+n1+" es " + boolean + " por lo tanto es impar ");
        }
       document.write("<br>");

//Double
document.write("<br>"+"Double:"+ "<br>");       
       

document.write("División de dos números enteros"+ "<br>");

var n1=prompt("Ingrese un numero para dividir");
var n2=prompt("Ingrese otro numero para dividir");

var division=n1/n2; //variable de tipo doble
document.write("El resultado de la división es: "+division+ "<br>");


//Numericas
document.write("<br>"+"Numericas:"+ "<br>");   


document.write("Suma de dos números enteros"+ "<br>");

var n1=prompt("Ingrese un numero para sumar");
var n2=prompt("Ingrese otro numero para sumar");
n1=parseInt(n1);
n2=parseInt(n2);
var suma=( n1+ n2);
document.write("El resultado de la suma es: "+ suma+ "<br>");
  