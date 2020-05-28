//Este trabajo es presentado por Sharyt Dayana Ospina el dia 13/05/2020
//En este trabajo se va arealizar un mapamundi y se va a poner sobre un plano, una esfera y un cubo 


//Se declaran las variables render, scene y camera

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);
//render
var renderer = new THREE.WebGLRenderer({alpha:true});//Variable para el render
renderer.setClearColor (0.000000, 0); //Es para poner el color del entorno
renderer.setSize(window.innerWidth, window.innerHeight); //para el tamaño del render
document.body.appendChild(renderer.domElement);//renderizamos todo para que se pueda visualizar




//Crear la esfera
var geometry = new THREE.SphereGeometry(8, 32, 32); //crear la geometria de la esfera
var loader = new THREE.TextureLoader();//declarar la variable que va a permitir cargar la imagen
var texture = loader.load ('tierra.jpg');//en la variable textura se carga la imagen que se va a usar
var material = new THREE.MeshBasicMaterial({ 
map: texture, 
flatShading: false,
shininess: 80 , 
specularMap: texture,
normalMap:texture,
opacity: 1,
wireframe: false,
 }); //el material que se va a usar en todas las figuras


var sphere = new THREE.Mesh(geometry, material);//se declara la variable esfera y se le dan los parametros al objeto 

//Crear la segunda figura -Plano
var geometry1= new THREE.PlaneGeometry (19, 14, 28);//crea la geometria del plano
var plano = new THREE.Mesh(geometry1, material);// Se declara la variable plano y se le dan los parametros al objeto 

//crear la tercer figura- cubo
var geometry2= new THREE.BoxGeometry(10,10,10);//se crea la geometria del cubo
var caja= new THREE.Mesh(geometry2, material);//declara la variable cubo y se le dan los parametros al objeto 

//Agregar las figuras a la escena
scene.add(sphere, plano, caja);



var ambient =new THREE.AmbientLight(0xffffff, 0.2); //intensidad de la luz
scene.add(ambient); //se añade a la escena
var light = new THREE.DirectionalLight (0xffffff, 25, 15, 30);//Principal fuente de luz
light.position.set(10,20,20); //posicion de la luz
light.castShadow =true; //sombra de acuerdo a la direccion de la luz
scene.add(light);//se añade la luz
document.body.appendChild(renderer.domElement);

//darle las posiciones a las figuras
plano.position.x = -25;//le asignamos una posicion en el eje x a la figura plano
caja.position.x =25; //le asignamos la posicion opuesta al mapamundi que esta en el cubo

camera.position.z= 30;//posicion de la camara



//Funcion para animar el movimiento de la Tierra.
 var animate = function () {
 		//Se solicita el cuadro de animacion
        requestAnimationFrame( animate );

        caja.rotation.y+= 0.01; //valor para la rotacion del cubo
        sphere.rotation.x+= 0; //rotacion en el eje x de la esfera
        sphere.rotation.y+= -0.01; //rotacion de la esfera en el eje y

        renderer.render (scene, camera);//Render de la escena y la camara

 };

 animate(); //inicializar la funcion animate para que sea ejecutada

//renderiza la escena en la cámara.
function render() {
	//Solicitamos el cuadro de animacion
	requestAnimationFrame(animate);
     renderer.render( scene, camera );//render para la escena y la camara
 };


//inicializamos la funcion para que sea ejecutada
render();