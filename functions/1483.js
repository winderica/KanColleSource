const function1483 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(15),
        o = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "nowHP", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_now_hp")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "maxHP", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_max_hp")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "subValue", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_sub_value")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isLandingMap = function () {
                return null != this._o
            }, t.prototype.isSuccess = function () {
                return this.subValue > 0
            }, t
        }();
    e.LandingModel = o
}