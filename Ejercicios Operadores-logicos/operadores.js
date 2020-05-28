//Ejemplos de los operadores 

//Operador ++
document.write("Operador ++"+ "<br>");
document.write("<br>"+"Repeticion de una multiplicación 3 veces"+ "<br>");
var A=5;
var B=3;
var rta;       


        
for( i=0; i<3; i++){//Se usa para que la multiplicación se realice 3 veces y en cada repetición la variable A aumente en 1

   rta= A*B;
   A++;
   document.write ("Rta ciclo " + i + ": " + rta + "<br>");
   
   }
  //imprimir el resultado   
  document.write("Despues de realizarce la multiplicación 3 veces la respuesta es: "+ rta + "<br>");    
  document.write("<br>");
    
 //------------------
 //Operador --
document.write("<br>"+"Operador --"+ "<br>");
document.write("<br>");
document.write("Determinar el valor final de las tres variables para la instrucción D =B+C-- + --A" + "<br>"); 
        
        var A=2;
        var B=1;
        var C=3;
        var D=0;
        document.write("<br>"+"Datos : "+ "A="+A+ ", "+ "B="+B+ ", "+ "C="+C+ "<br>");

        for( i=0; i<=2; i++){//Se usa para repetir la operación 2 veces

            D=(B+(C--)+(A--));  //El -- disminuye en 1 el valor de las variables y despues se hace la operacion para obtener el valor de D
            //1) B=1+2+1 --> D=4
            //2) D=1+1+0 --> D=2
        }
        //imprimir el resultado   
        document.write("El valor de D despues de cumplir la instruccion 2 veces es: "+ D + "<br>");  
        
    
 //------------------
 //Operador <=

//Dadas las variables de tipo entero con valores A = 5, B = 3, C = -12 indicar si la evaluación de estas expresiones daría como resultado verdadero o falso:
document.write("<br>"+"Operador <="+ "<br>");
document.write("<br>");
document.write("Verificación de la expresión A+B+C<=0")       
        
        var A=5;
        var B=3;
        var C=-12;
        var rta= A+B+C;
        document.write("<br>"+"Datos : "+ "A="+A+ ", "+ "B="+B+ ", "+ "C="+C+ "<br>");

        if(rta<=0){//evalua si la operación es menor o igual a cero
            document.write("La expresión A+B+C<=0 es verdadera ya que "+rta+" es menor que 0"+"<br>");
       
        }
    
 //------------------
 //Operador >=
document.write("<br>"+"Operador >="+ "<br>");
document.write("<br>");
document.write("Comparación de números"+ "<br>");


        var n1= prompt("Ingrese el primer numero");
        var n2= prompt("Ingrese el segundo numero");
        
        document.write("Primer numero:"+n1+ "<br>");
        document.write("Segundo numero:"+n2+ "<br>");


          if(n1>=n2){//evalua si el primer numero digitado es mayor o igual al segundo numero digitado
            if(n1>n2){//evalua si el primer numero digitado es mayor  al segundo numero digitado
                document.write("El número "+ n1 +" es mayor que el número "+ n2);
            }else{//por defecto los dos números serian iguales
                document.write("Los 2 números digitados son iguales");
            }
        }else {//por defecto el segundo numero digitado es mayor al primer numero digitado
               document.write("El número "+ n2 +" es mayor que el número "+ n1 + "<br>");

        }

//------------
//Operador >
document.write("<br>"+"Operador >"+ "<br>");
document.write("<br>");
document.write("El numero es positivo o negativo"+ "<br>");
        
        var n1= prompt("Ingrese un numero entero");
        document.write("Numero evaluado:"+ n1 + "<br>");
       
        if(n1==0){//evalua si el numero digitado es igual a cero
            document.write("El número es cero"+ "<br>");
        }else if(n1>0){//evalua si el numero digitado es positivo
            document.write("El número es positivo"+ "<br>");
        }else{//por descarte el numero digitado es negativo
            document.write("El número es negativo"+ "<br>");
        }
       document.write("<br>");
//------------
//Operador !=
document.write("<br>"+"Operador !="+ "<br>");
document.write("<br>");
document.write("Comparar si los apellidos son diferentes"+ "<br>");
        
        var ap1= "Ospina";
        var ap2= "Rodriguez";

        document.write("Apellido 1: "+ap1+ "<br>");
        document.write("Apellido 2: "+ap2+ "<br>");
               
        if(ap1!=ap2){//evalua si el primer apellido es diferente al segundo
            document.write("Los apellidos son diferentes");
        }else {//evalua si el numero digitado es positivo
            document.write("Los apellidos no son diferentes"+ "<br>");
        }
        document.write("<br>");

//------------
//Operador <
document.write("<br>"+"Operador <"+ "<br>");
document.write("<br>");
document.write("Comparar si la suma de dos numeros es menor que 10 "+ "<br>");
        
        var n1= 3;
        var n2= 6;
        var suma= n1+n2;
        document.write("Numero 1: "+n1+ "<br>");
        document.write("Numero 2: "+n2+ "<br>");
       
               
        if(suma<10){//evalua si el primer apellido es diferente al segundo
            document.write("La suma es " + suma+ " y es menor que 10" );
        }else {//evalua si el numero digitado es positivo
            document.write("La suma no es menor que 10"+ "<br>");
        }
        document.write("<br>");

//------------
//Operador ==
document.write("<br>"+"Operador =="+ "<br>");
document.write("<br>");
       
        document.write("Comparar si 2 números son iguales"+ "<br>");
        
        var n1=prompt("Digite un numero");
        var n2=prompt("Digite otro número");
        document.write("Numero 1: "+n1+ "<br>");
        document.write("Numero 2: "+n2+ "<br>");

        if(n1==n2){//Se usa para verificar si los 2 números digitados son iguales
        document.write("Los dos números son iguales");
        }else{
            document.write("El número "+n1+" es diferente al número "+n2);
        }
  
