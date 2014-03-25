module JumperCube.Objects.Behaviors {
    export class Controlable extends Behavior {
        update(deltaTime: number) {
            if (Keyboard.isKeyDown(Key.Left))
                this.gameObject.push(new THREE.Vector3(-1, 0, 0));
            if (Keyboard.isKeyDown(Key.Right))
                this.gameObject.push(new THREE.Vector3(1, 0, 0));
            if (Keyboard.isKeyDown(Key.Down))
                this.gameObject.push(new THREE.Vector3(0, -1, 0));
            if (Keyboard.isKeyDown(Key.Up))
                this.gameObject.push(new THREE.Vector3(0, 1, 0));
        }
    }
}