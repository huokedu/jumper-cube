module JumperCube.Objects {
    import Vector3 = THREE.Vector3;
    export var MeterSize = 3;

    export class GameObject {
        behaviors: Behaviors.Behavior[];

        private acceleration: Vector3;
        private instantaneousAcceleration: Vector3;
        momentum: Vector3;

        constructor(public body: THREE.Object3D, public mass: number)
        {
            this.behaviors = [];

            this.acceleration = new Vector3();
            this.instantaneousAcceleration = new Vector3();
            this.momentum = new Vector3();
        }

        update(deltaTime: number) {
            this.behaviors.forEach(b => b.update(deltaTime));

            var accellSecs = this.acceleration.clone().multiplyScalar(deltaTime);
            this.momentum.add(this.instantaneousAcceleration);
            var toMove = this.momentum.clone().add(accellSecs.clone().divideScalar(2));
            this.body.position.add(toMove.multiplyScalar(MeterSize * deltaTime));
            this.momentum.add(accellSecs);

            this.acceleration = new Vector3();
            this.instantaneousAcceleration = new Vector3();
        }

        push(force: THREE.Vector3, instantaneous: boolean = false, acceleration: boolean = false) {
            if (!acceleration)
                force = force.clone().divideScalar(this.mass);

            if (!instantaneous)
                this.acceleration.add(force);
            else
                this.instantaneousAcceleration.add(force);
        }

        addBehavior(creator: { new (gameObject: GameObject): Behaviors.Behavior }) {
            var behavior = new creator(this);
            this.behaviors.push(behavior);
        }
    }
}