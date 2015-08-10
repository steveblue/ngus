System.register(['./service/famous', './core/node', './core/dom-element', './webgl-renderables/mesh'], function(exports_1) {
    function exportStar_1(m) {
        for(var n in m) {
            if (n !== "default") exports_1(n, m[n]);
        }
    }
    return {
        setters:[
            function (_famous_1) {
                exportStar_1(_famous_1);
            },
            function (_node_1) {
                exportStar_1(_node_1);
            },
            function (_dom_element_1) {
                exportStar_1(_dom_element_1);
            },
            function (_mesh_1) {
                exportStar_1(_mesh_1);
            }],
        execute: function() {
        }
    }
});
