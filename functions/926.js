const function926 = function (t, e, i) {
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
                    return n.ObjUtil.getNumber(this._o, "api_usemst")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "count", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_getcount")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "icon_id", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_icon_id")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getUseitemMstID = function () {
                return 4 == this.type ? [-1, 31, 32, 33, 34, 2, 1, 3, 4][this.icon_id] : 5 == this.type ? this.icon_id : 0
            }, t
        }();
    e.DropItemModel = o
}