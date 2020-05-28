//Este archivo nos va a construir dos figura geometricas

// Creado por: Sharyt Dayana Ospina el dia 22-04-2020

//Elementos fundamentales para crear una animacion Escena, camara, render, el objeto.

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 100);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); //es para acomodar al tamaño de la pantalla del dispositivo
document.body.appendChild(renderer.domElement);

//Darle caracteristicas al objeto que voy a construir
var geometry = new THREE.BoxGeometry(1, 1, 1); //tamaño del cubo
//de que tipo de material voy a construir e oobjeto (mesh) y que color va a tener
var material = new THREE.MeshBasicMaterial({color: 0x00aaff });
var cube =new THREE.Mesh(geometry,material); //que voy a dibujar y de que color
//Poner el cubo en escena para que se vea
scene.add(cube);


//--------------------------
//Figura 2

var geometry = new THREE.SphereGeometry(1, 20, 10); //tamaño de la esfera no esta completamente redonda para que se pueda ver el movimiento
var material = new THREE.MeshBasicMaterial({color: 0xaa11ff });
var esfera =new THREE.Mesh(geometry,material); 
scene.add(esfera);
esfera.position.x=2;//poner la esfera en la posicion x?2 para que no quede encima del cubo

camera.position.z=6; //posicion de la camara

//animar el objeto para que se mueva y se pueda ver que si es un cubo
var animate = function (){
	requestAnimationFrame (animate); //funcion de java que llama a animate

	cube.rotation.x += 0.02; //rotar el cubo en x y el numero indica a que velocidad se mueva
	cube.rotation.y += 0.02; //rotar el cubo en y 
	esfera.rotation.x += 0.02;//rotar la esfera en x y el numero indica a que velocidad se mueva
	esfera.rotation.y += 0.02;//rotar la esfera en y 
	renderer.render(scene, camera);

};
animate();

