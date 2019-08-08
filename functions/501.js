const function501 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "ship_id", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_ship_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "equip_type", {
                get: function () {
                    return n.ObjUtil.getNumArray(this._o, "api_equip_type")
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.EquipModel = o
}