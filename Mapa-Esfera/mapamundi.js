var scene=new THREE.Scene();
var camera= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer= new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0.000000, 0);
document.body.appendChild(render.domElement);
//Creacion de las geometrias
var sphereGeometry = new THREE.SphereGeometry (8, 32, 32);
var planeGeometry = new THREE.PlaneGeometry(37, 22);
const texture = loader.load('tierra.jpg');
var material = new THREE.MeshBasicMaterial({
	shininess: 20,
	map: texture,
});
var material = new THREE.MeshBasicMaterial( { map: texture } );
//Creacion de figuras 
var plane = new THREE.Mesh(planeGeometry, material);
var sphere = new THREE.Mesh(sphereGeometry, material);
//Agregar las figuras a la escena
scene.add( sphere );
scene.add( plane );
//Posiciones de la camara y los objetos
camera.position.z = 25;
sphere.position.x -= 20;
plane.position.x += 20;
//Funcion animate
var animate = function(){
	requestAnimationFrame (animate);
	sphere.roration.y += 0.01;
	renderer.render(scene, camera);
};
animate();
