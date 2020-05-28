//Este archivo es para construir dos figuras usando diferentes materiales

//Elementos fundamentales para crear una animacion Escena, camara, render, el objeto.
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 100);//poner el tipo de camara
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); //es para acomodar al tamaño de la pantalla del dispositivo
document.body.appendChild(renderer.domElement);

//Darle caracteristicas al objeto que voy a construir
var geometry = new THREE.CylinderGeometry(0, 1, 4, 20); //Tamaño del cono
var material = new THREE.MeshBasicMaterial({color: 0xaaFF08 }); //Material y color del cono
var cono =new THREE.Mesh(geometry,material); 

scene.add(cono);//Poner el cono en escena para que se vea


//--------------------------
//Figura 2

var geometry = new THREE.CylinderGeometry(1, 1, 4, 20); //tamaño del cilindro
var material = new THREE.MeshNormalMaterial({color: 0x00aaff });//color del cilindro
var cylinder =new THREE.Mesh(geometry,material); 
scene.add(cylinder);//Poner el cono en escena para que se vea

cylinder.position.x =3; //para ubicar la figura en la posicion x=3

camera.position.z=6; //posicion de la camara


var animate = function (){
	requestAnimationFrame (animate); 

	//Para que la figura rote en X y en Y a una velocidad de 0.02
	cono.rotation.x += 0.02; 
	cono.rotation.y += 0.02;

	//Para que la figura rote en X y en Y a una velocidad de 0.02
	cylinder.rotation.x += 0.02; 
	cylinder.rotation.y += 0.02;

	renderer.render(scene, camera);

};
animate();
