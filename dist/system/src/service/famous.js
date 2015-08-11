System.register([], function(exports_1) {
    var $famous;
    return {
        setters:[],
        execute: function() {
            $famous = (function () {
                function $famous() {
                    if (!$famous.created) {
                        throw new Error("$famous is a singleton. Call $famous.get() instead.");
                    }
                    this.engine = famous.core.FamousEngine;
                    this.scene = this.engine.createScene();
                    this.engine.init();
                }
                $famous.get = function () {
                    if ($famous.instance == null) {
                        $famous.created = true;
                        $famous.instance = new $famous();
                        $famous.created = false;
                    }
                    return $famous.instance;
                };
                $famous.created = false;
                return $famous;
            })();
            exports_1("$famous", $famous);
        }
    }
});
