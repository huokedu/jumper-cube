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

    var level = new JumperCube.Level();

    var camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 100);
    camera.position.z = 10;
    camera.position.y = 2;
    camera.position.x = 2;
    level.add(camera);

    var pointLight = new THREE.PointLight(0xFFFFFF);
    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;
    level.add(pointLight);

    var cube = new JumperCube.Objects.CubeObject(1, 1, 1, 0xff0000);
    cube.addBehavior(JumperCube.Objects.Behaviors.Controlable);
    level.add(cube);

    Keyboard.init();

    var clock = new THREE.Clock();
    Utils.StartTick(() => {
        var deltaTime = clock.getDelta();

        cube.update(deltaTime);
        camera.lookAt(cube.body.position);
        renderer.render(level.scene, camera);
    });
});
