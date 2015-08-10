declare var famous: any;
// $famous
export class $famous {

    static instance: $famous;
    static created: Boolean = false;
    engine: any;
    scene: any;
    camera: any;

    constructor() {

        let Camera = famous.components.Camera;

        if (!$famous.created) {
            throw new Error("$famous is a singleton. Call $famous.get() instead.");
        }

        this.engine = famous.core.FamousEngine;
        this.scene = this.engine.createScene();
        this.camera = new Camera(this.scene).setDepth(1000);
        this.engine.init();

    }

    static get() {

        if ($famous.instance == null) {
            $famous.created = true;
            $famous.instance = new $famous();
            $famous.created = false;
        }

        return $famous.instance;

    }

}
