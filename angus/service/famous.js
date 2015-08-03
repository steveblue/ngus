var $famous = (function () {
    function $famous() {
        if (!$famous.isCreating) {
            throw new Error("$famous is a singleton. Call $famous.get() instead.");
        }
        this.engine = famous.core.FamousEngine;
        this.scene = this.engine.createScene();
        this.engine.init();
    }
    $famous.get = function () {
        if ($famous.instance == null) {
            $famous.isCreating = true;
            $famous.instance = new $famous();
            $famous.isCreating = false;
        }
        return $famous.instance;
    };
    $famous.isCreating = false;
    return $famous;
})();
exports.$famous = $famous;
