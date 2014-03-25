module JumperCube.Objects {
    export class CubeObject extends GameObject {
        constructor(width: number, height: number, depth: number, color: number) {
            var material = new THREE.MeshLambertMaterial({ color: color });
            var mesh = new THREE.Mesh(new THREE.CubeGeometry(width, height, depth), material);
            super(mesh, width * height * depth);
        }

        update(deltaTime: number) {
            super.update(deltaTime);
        }
    }
} 