const function535 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "required_level", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_upgrade_level")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "mst_id_before", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_current_ship_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "mst_id_after", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "blueprint", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_drawing_count")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "catapult", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_catapult_count")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "battlereport", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_report_count")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "newhokohesosizai", {
                get: function () {
                    switch (this.mst_id_after) {
                        case 546:
                            return 3;
                        case 591:
                            return 2;
                        default:
                            return 0
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "newkokuhesosizai", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_aviation_mat_count")
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.ShipUpgradeModel = o
}