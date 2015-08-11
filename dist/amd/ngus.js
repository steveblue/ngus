define(["require", "exports", './service/famous', './core/node', './core/dom-element', './webgl-renderables/mesh', './components/camera'], function (require, exports, famous_1, node_1, dom_element_1, mesh_1, camera_1) {
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(famous_1);
    __export(node_1);
    __export(dom_element_1);
    __export(mesh_1);
    __export(camera_1);
});
