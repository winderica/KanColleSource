const function920 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(14), o = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "id", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "no", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_no")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "color", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_color_no")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "passed", {
            get: function () {
                return 1 == n.ObjUtil.getNumber(this._o, "api_passed")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "distance", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_distance")
            }, enumerable: !0, configurable: !0
        }), t
    }();
    e.CellModel = o
}