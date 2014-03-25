///<reference path="references.ts" />
import Keyboard = JumperCube.Keyboard;
import Utils = JumperCube.Utils;

function createRenderer(width: number, height: number, container :JQuery) {
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    container.append(renderer.domElement);
    return renderer;
}

$(document).ready(function () {
    var WIDTH = 800, HEIGHT = 600;

    var renderer = createRenderer(WIDTH, HEIGHT, $('#content'));

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 100);
    camera.position.z = 40;
    camera.position.y = 2;
    camera.position.x = 2;
    scene.add(camera);

    var pointLight = new THREE.PointLight(0xFFFFFF);
    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;
    scene.add(pointLight);

    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xCC0000 });
    var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), cubeMaterial);
    scene.add(cube);

    Keyboard.init();

    Utils.StartTick(() => {
        camera.lookAt(cube.position);
        renderer.render(scene, camera);
    });
});
