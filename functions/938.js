const function938 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(15),
        o = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "ship_mem_id", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_supply_ship")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ship_mem_id_supplied", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_given_ship")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "num_of_use", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_use_num")
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.ReplenishmentModel = o
}