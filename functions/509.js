const function509 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "type", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_type")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "message", {
                get: function () {
                    return n.ObjUtil.getString(this._o, "api_message")
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.LogModel = o
}