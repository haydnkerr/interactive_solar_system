import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);













// Instantiate a loader
let loader = new GLTFLoader();

let mercuryMenuBtn = document.getElementById("mercury-menu")
let venusMenuBtn = document.getElementById("venus-menu")
let earthMenuBtn = document.getElementById("earth-menu")
let marsMenuBtn = document.getElementById("mars-menu")
let jupiterMenuBtn = document.getElementById("jupiter-menu")
let saturnMenuBtn = document.getElementById("saturn-menu")
let uranusMenuBtn = document.getElementById("uranus-menu")
let neptuneMenuBtn = document.getElementById("neptune-menu")
let sunMenuBtn = document.getElementById("sun-menu")
let moonMenuBtn = document.getElementById("moon-menu")
let cometMenuBtn = document.getElementById("comet-menu")
let meteorMenuBtn = document.getElementById("meteor-menu")
let satelliteMenuBtn = document.getElementById("satellite-menu")
let alienMenuBtn = document.getElementById("alien-menu")


/* =========================== Individual Planets ===================== */
let mercury = document.getElementById('mercury');
let venus = document.getElementById('venus');
let earth = document.getElementById('earth');
let mars = document.getElementById('mars');
let jupiter = document.getElementById('jupiter');
let saturn = document.getElementById('saturn');
let neptune = document.getElementById('neptune');
let uranus = document.getElementById('uranus');
let sun = document.getElementById('sun')

let moonImage = './assets/moon-real.glb';
let earthImage = './assets/earth-real-2.glb';
let sunImage = './assets/sun-real.glb';
let mercuryImage = './assets/mercury.glb';
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
sun.addEventListener('click', sunInteraction);

earth.addEventListener("touchstart", earthInteraction);

earthMenuBtn.addEventListener("click", earthInteraction);
mercuryMenuBtn.addEventListener('click', mercuryInteraction);
venusMenuBtn.addEventListener('click', venusInteraction);
marsMenuBtn.addEventListener('click', marsInteraction);
jupiterMenuBtn.addEventListener('click', jupiterInteraction);
saturnMenuBtn.addEventListener('click', saturnInteraction);
uranusMenuBtn.addEventListener('click', uranusInteraction);
neptuneMenuBtn.addEventListener('click', neptuneInteraction);
sunMenuBtn.addEventListener('click', sunInteraction);
moonMenuBtn.addEventListener('click', moonInteraction);
cometMenuBtn.addEventListener('click', cometInteraction);
meteorMenuBtn.addEventListener('click', meteorInteraction);
satelliteMenuBtn.addEventListener('click', satelliteInteraction);
alienMenuBtn.addEventListener('click', alienInteraction);


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

        function (xhr) {

            console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },

        function (error) {

            console.log('An error happened');

        }
    );

    let planetImageContainerReal = document.getElementById('planet-image-container')
    let renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 0); 
    renderer.setSize(window.innerWidth, window.innerHeight);
    planetImageContainerReal.appendChild(renderer.domElement);
    camera.position.z = 2.5;

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.antialias = true;

    let controls = new OrbitControls(camera, renderer.domElement);



    let modalCloseBtn = document.getElementById('close-btn')

    modalCloseBtn.addEventListener('click', closeModal);


    function closeModal() {

        isAnimationRunning = false;
    }



    function animate() {
        if (isAnimationRunning) {
            requestAnimationFrame(animate);
            planetDisplay.rotation.y += 0.003;
            renderer.render(scene, camera);
        }
    }



    animate();
}





