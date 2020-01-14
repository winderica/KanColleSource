const function974 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "plane_type", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_plane_type")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "result", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_result")
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.AirReconnaissanceModel = o
}