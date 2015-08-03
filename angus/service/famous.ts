declare var famous: any;

export class $famous
{

    static instance: $famous;
    static isCreating: Boolean = false;
    engine: Object;
    scene: Object;

    constructor() {

        if (!$famous.isCreating) {
            throw new Error("$famous is a singleton. Call $famous.get() instead.");
        }

        this.engine = famous.core.FamousEngine;
        this.scene = this.engine.createScene();
        this.engine.init();

    }

    static get() {

        if ($famous.instance == null) {
            $famous.isCreating = true;
            $famous.instance = new $famous();
            $famous.isCreating = false;
        }

        return $famous.instance;

    }

}
