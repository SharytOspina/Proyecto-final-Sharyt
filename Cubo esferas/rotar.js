//Este es el codigo para crear un cubo que rota con unas esferas en los angulos
//Creado por shary dayana Ospina el 29 de abril de 2020

//Se declaran las variables render, scene y camera
 var renderer;    
 var scene;    
 var camera;

    function init() { //funcion que va a tener los atributos de los objetos

        scene = new THREE.Scene(); //se declara la escena por medio de THREE.js
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);// se declara el objeto camara
        
        //Atributos del renderizado
        renderer = new THREE.WebGLRenderer(); //Objeto del renderizado a partir de THREE.JS       
        renderer.setClearColor(0x5dc1b9, 1.0); //le da el color y la opacidad al fondo de la composicion       
        renderer.setSize(window.innerWidth, window.innerHeight); //Tamaño del render a partir del monitor o pantalla del dispositivo       
        renderer.physicallyCorrectLights = true; //Correccion de luces para el render       
        renderer.gammaInput = true; //tonalidades de entrada       
        renderer.gammaOutput = true;  // tonalidades de salida      
        renderer.shadowMap.enabled = true; //Para las sombras        
        renderer.toneMapping = THREE.ReinhardToneMapping;        
        renderer.setPixelRatio( window.devicePixelRatio );        
        renderer.setSize( window.innerWidth, window.innerHeight );


        //Plano de la figura

        var planeGeometry = new THREE.PlaneGeometry(20, 20); // Establece las dimensiones del plano donde estara el cubo         
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0x1155ff}); //Define el material y el color a la superficie sobre la que esta el cubo (plano)      
        var plane = new THREE.Mesh(planeGeometry, planeMaterial); //Se le dan atributos al objeto plano       
        plane.receiveShadow = true;  //Proyeccion de la sombra en el plano      
        plane.rotation.x = -0.5 * Math.PI;  //Para que el plano rote en el eje x      
        plane.position.x = 0; // Posicion del plano en x       
        plane.position.y = -2; // Posicion del plano en y          
        plane.position.z = 0; // Posicion del plano en z   

        scene.add(plane);// Se añade el plano a la escena

        //Crear el cubo

        var cubeGeometry = new THREE.BoxGeometry(6, 4, 6);  // Dimensiones del cubo      
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 'green', transparent:true, opacity:0.8}); //Material, color y opacidad del cubo     
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial); //Atributos del objeto cubo       
        cube.castShadow=true;

        scene.add(cube); // Se añade el cubo a la escena

        //Posicion de la camara
        camera.position.x = 15;        
        camera.position.y = 16;        
        camera.position.z = 13;   //aleja o acerca la camara     
        camera.lookAt(scene.position);   

        //luz del ambiente
        var ambient = new THREE.AmbientLight(0xffffff,0.3); //le da el color a la sombra       
        scene.add(ambient);        
        var light = new THREE.DirectionalLight(0xffffff, 1, 100, 2 );  //cambia como el tono de la luz      
        light.position.set(10,20 , 20); 
        light.castShadow = true;        
        scene.add(light);

        document.body.appendChild(renderer.domElement);

        addVertices(cube);        
        render();    
    }

    function addVertices(mesh) { // Funcion para los vertices del cubo        
    	var vertices = mesh.geometry.vertices;        
    	var vertexMaterial = new THREE.MeshPhongMaterial({color: 0x0011aa}); //Material y color de las esferas

        vertices.forEach(function (vertex) {            
        	var vertexSphere = new THREE.SphereGeometry(0.15); //Crea las esferas           
        	var vertexMesh = new THREE.Mesh(vertexSphere, vertexMaterial); //Atributos del objeto vertexMesh           
        	vertexMesh.position.copy(vertex);           
        	scene.add(vertexMesh);        }); // Se añade el vertexMesh, que es el que tiene las esferas, a la escena   
    }

    function render() {  //Funcion que hace que la camara gire de manera circular       
    	var rotSpeed = 0.01;        
    	camera.position.x = camera.position.x * Math.cos(rotSpeed) + camera.position.z * Math.sin(rotSpeed);        
    	camera.position.z = camera.position.z * Math.cos(rotSpeed) - camera.position.x * Math.sin(rotSpeed);        
    	camera.lookAt(scene.position);

        requestAnimationFrame(render);        
        renderer.render(scene, camera);    
    }

    function handleResize() {        
    	camera.aspect = window.innerWidth / window.innerHeight;        
    	camera.updateProjectionMatrix();        
    	renderer.setSize(window.innerWidth, window.innerHeight);    
    }

    window.addEventListener("DOMContentLoaded", function(event) {            
    	init();    
    });    

    window.addEventListener('resize', handleResize, false);