const function1482 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(15),
        o = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "mst_id", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "level", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_slot_level")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "count", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_value")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isUseitem = function () {
                return 1 == this._type
            }, t.prototype.isShip = function () {
                return 2 == this._type
            }, t.prototype.isSlotitem = function () {
                return 3 == this._type
            }, t.prototype.isFurniture = function () {
                return 5 == this._type
            }, Object.defineProperty(t.prototype, "_type", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_type")
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.MapBonusModel = o
}