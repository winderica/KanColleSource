const function1236 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "no", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "no")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "type", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "type")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "from", {
            get: function () {
                var t = n.ObjUtil.getNumber(this._o, "from"), e = new PIXI.Point;
                return e.x = n.ObjUtil.getNumber(t, "x"), e.y = n.ObjUtil.getNumber(t, "y"), e
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "to", {
            get: function () {
                var t = n.ObjUtil.getNumber(this._o, "to"), e = new PIXI.Point;
                return e.x = n.ObjUtil.getNumber(t, "x"), e.y = n.ObjUtil.getNumber(t, "y"), e
            }, enumerable: !0, configurable: !0
        }), t
    }();
    e.AirRaidData = o
}