import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);










// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );


// const earthTexture = new 
// THREE.TextureLoader().load('./assets/earth-sphere.png');

// const geometry = new THREE.SphereGeometry( 3, 64, 64 ); 
// const material = new THREE.MeshBasicMaterial( {map: earthTexture,} ); 
// const sphere = new THREE.Mesh( geometry, material ); 

// scene.add( sphere );

// camera.position.z = 20;






// function animate() {
// 	requestAnimationFrame( animate );

// 	cube.rotation.x += 0.0;
// 	cube.rotation.y += 0.01;

// 	renderer.render( scene, camera );
// }

// animate();

// loader.load( './assets/mars-real.glb', function ( gltf ) {
// 	renderer.render( scene, camera )
//     scene.add(gltf.scene);


// }, undefined, function ( error ) {

// 	console.error( error );

// } );

// Instantiate a loader
let loader = new GLTFLoader();

let mercury = document.getElementById('mercury-menu');
let venus = document.getElementById('venus-menu');
let earth = document.getElementById('earth-menu');
let mars = document.getElementById('mars-menu');
let jupiter = document.getElementById('jupiter-menu');
let saturn = document.getElementById('saturn-menu');
let neptune = document.getElementById('neptune-menu');
let uranus = document.getElementById('uranus-menu');
let moon = document.getElementById('moon-menu');
let sun = document.getElementById('sun-menu');

let moonImage = './assets/moon-real.glb';
let earthImage = './assets/earth-real-2.glb';
let sunImage = './assets/sun-real.glb';
let mercuryImage = './assets/mercury-real.glb';
let venusImage = './assets/venus-real.glb';
let marsImage = './assets/mars-real.glb';
let jupiterImage = './assets/jupiter-real.glb';
let saturnImage = './assets/earth-real.glb';
let neptuneImage = './assets/neptune-real.glb';
let uranusImage = './assets/uranus-real.glb';
let planetImage;

let counter = 0;

earth.addEventListener("click", earthInteraction);
mercury.addEventListener('click', mercuryInteraction);
venus.addEventListener('click', venusInteraction);
mars.addEventListener('click', marsInteraction);
jupiter.addEventListener('click', jupiterInteraction);
saturn.addEventListener('click', saturnInteraction);
uranus.addEventListener('click', uranusInteraction);
neptune.addEventListener('click', neptuneInteraction);
moon.addEventListener('click', moonInteraction);
sun.addEventListener('click', sunInteraction);


let planetImageFile;
let planetDisplay;

function mercuryInteraction() {
    planetImageFile = mercuryImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}
function venusInteraction() {
    planetImageFile = venusImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}
function earthInteraction() {
    planetImageFile = earthImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}
function marsInteraction() {
    planetImageFile = marsImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}

function jupiterInteraction() {
    planetImageFile = jupiterImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}
function saturnInteraction() {
    planetImageFile = saturnImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}

function uranusInteraction() {
    planetImageFile = uranusImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}
function neptuneInteraction() {
    planetImageFile = neptuneImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}
function sunInteraction() {
    planetImageFile = sunImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}
function moonInteraction() {
    planetImageFile = moonImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}

let isAnimationRunning = true;

// let al = new THREE.AmbientLight(0xffffff, 0.2);
// scene.add(al)

    let directionalLight = new THREE.DirectionalLight(0xffffff, 5); // Color, Intensity
directionalLight.position.set(1, 1, 1); // Set the direction
scene.add(directionalLight);

// const hemisphereLight = new THREE.HemisphereLight(0x87cefa, 0xffffff, 0.6); // Sky color, Ground color, Intensity
// scene.add(hemisphereLight);

function populatePlanet() {

    if (planetDisplay) {
        scene.remove(planetDisplay);
    }

    // Load a glTF resource
    loader.load(
        // resource URL
        planetImageFile,
        // called when the resource is loaded
        function (gltf) {
            planetDisplay = gltf.scene
            scene.add(planetDisplay);

        },
        // called while loading is progressing
        function (xhr) {

            console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },
        // called when loading has errors
        function (error) {

            console.log('An error happened');

        }
    );

    let planetImageContainerReal = document.getElementById('planet-image-container')
    let renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 0); // the default
    renderer.setSize(window.innerWidth, window.innerHeight);
    planetImageContainerReal.appendChild(renderer.domElement);
    camera.position.z = 2.5;

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.antialias = true;

    let controls = new OrbitControls(camera, renderer.domElement);



    let modalCloseBtn = document.getElementById('close-btn')

    modalCloseBtn.addEventListener('click', closeModal);


    function closeModal() {

        isAnimationRunning = false; // Stop the animation when the modal is closed
    }



    function animate() {
        if (isAnimationRunning) { // Check the flag before continuing the animation
            requestAnimationFrame(animate);
            planetDisplay.rotation.y += 0.003;
            renderer.render(scene, camera);
        }
    }



    animate();
}






// Load a glTF resource
// loader.load(
// 	// resource URL
// 	marsImage,
// 	// called when the resource is loaded
// 	function ( gltf ) {
// 		mars = gltf.scene
// 		scene.add( mars );
// 		mars.position.x = 20

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );

// Load a glTF resource Venus
// loader.load(
// 	// resource URL
// 	venusImage,
// 	// called when the resource is loaded
// 	function ( gltf ) {
// 		venus = gltf.scene
// 		scene.add( venus );
// 		venus.position.x = -10

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );

// Load a glTF resource Mercury
// loader.load(
// 	// resource URL
// 	mercuryImage,
// 	// called when the resource is loaded
// 	function ( gltf ) {
// 		mercury = gltf.scene
// 		scene.add( mercury );
// 		mercury.position.x = -5

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );

// loader.load(
// 	// resource URL
// 	neptuneImage,
// 	// called when the resource is loaded
// 	function ( gltf ) {
// 		neptune = gltf.scene
// 		scene.add( neptune );
// 		neptune.position.x = 10

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );

// Load a glTF resource
// loader.load(
// 	// resource URL
// 	earthImage,
// 	// called when the resource is loaded
// 	function ( gltf ) {
// 		earth = gltf.scene
// 		scene.add( earth );

// 		console.log(earth);
// 		earth.position.x = -15

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );

// loader.load(
// 	// resource URL
// 	sunImage,
// 	// called when the resource is loaded
// 	function ( gltf ) {
// 		sun = gltf.scene
// 		scene.add( sun );

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );


