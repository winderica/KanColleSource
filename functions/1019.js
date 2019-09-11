const function1019 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(15),
        o = function () {
            function t() {}
            return Object.defineProperty(t.prototype, "win_count", {
                get: function () {
                    return n.ObjUtil.getNumber(this._war, "api_win")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "lose_count", {
                get: function () {
                    return n.ObjUtil.getNumber(this._war, "api_lose")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "win_rate", {
                get: function () {
                    return n.ObjUtil.getNumber(this._war, "api_rate")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.update = function (t) {
                this._o = t
            }, Object.defineProperty(t.prototype, "_war", {
                get: function () {
                    return n.ObjUtil.getObject(this._o, "api_war")
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.EventSortieConditionModel = o
}