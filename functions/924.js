const function924 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "type", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_usemst")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "id", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "count", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_getcount")
            }, enumerable: !0, configurable: !0
        }), t
    }();
    e.EOItemModel = o
}