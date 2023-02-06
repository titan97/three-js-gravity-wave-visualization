import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	1,
	10000
);

const scene = new THREE.Scene();
scene.add(camera);

const canvas = document.querySelector("canvas");

const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 90, 300);

const separation = 3,
	amountX = 400,
	amountY = 100;

let particles,
	count = 0;
const numParticles = amountX * amountY;

const positions = new Float32Array(numParticles * 3);

let i = 0;

for (let ix = 0; ix < amountX; ix++) {
	for (let iz = 0; iz < amountY; iz++) {
		let x = separation * (ix - amountX / 2);

		let z = separation * (iz - amountY / 2);

		positions[i] = x; // x
		positions[i + 1] = 0; // y
		positions[i + 2] = z; // z

		i += 3;
	}
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const textureLoader = new THREE.TextureLoader();
const particleTexture = textureLoader.load("/circle.png");
const particleMaterial = new THREE.PointsMaterial();
particleMaterial.size = 1;
particleMaterial.sizeAttenuation = true;
particleMaterial.color = new THREE.Color("#000000");
particleMaterial.map = particleTexture;
particleMaterial.transparent = false;
particleMaterial.alphaTest = 0.5;
particleMaterial.opacity = 1.0;

particles = new THREE.Points(geometry, particleMaterial);
scene.add(particles);

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xe4e4e4, 0);

window.addEventListener("resize", () => {
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	renderer.setSize(sizes.width, sizes.height);
});

const stats = Stats()
document.body.appendChild(stats.dom)

controls.addEventListener("change", event => {
  console.log( controls.object.position );
})

function animate() {
	requestAnimationFrame(animate);
	const positions = particles.geometry.attributes.position.array;

	let i = 0;

	for (let ix = -amountX / 2; ix < amountX / 2; ix++) {
		for (let iy = -amountY / 2; iy < amountY / 2; iy++) {
			positions[i + 1] =
				(160 *
					Math.cos(
						2 * Math.atan(iy / (ix + 0.0001)) -
							count +
							0.5 * Math.sqrt(ix ** 2 + iy ** 2)
					)) /
				(20 + Math.sqrt(ix ** 2 + iy ** 2));
			i += 3;
		}
	}

	particles.geometry.attributes.position.needsUpdate = true;
	renderer.render(scene, camera);

	count += 0.1;
  stats.update()
}
animate();