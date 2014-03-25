module JumperCube {
    export class Level {
        gameObjects: Objects.GameObject[];
        scene: THREE.Scene;

        constructor() {
            this.gameObjects = [];
            this.scene = new THREE.Scene();
        }

        add(gameObject: Objects.GameObject): void;
        add(object3d: THREE.Object3D): void;

        add(object) {
            if (object.body === undefined)
                this.scene.add(object);
            else {
                this.gameObjects.push(object);
                this.scene.add(object.body);
            }
        }
    }
}
