const function496 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "mstID", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_name")
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.BGMMstModel = o
}