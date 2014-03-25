module JumperCube.Objects.Behaviors {
    export class Behavior {
        constructor(public gameObject: GameObject) { }
        update(deltaTime: number) { }
    }
}