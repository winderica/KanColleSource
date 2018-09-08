const function1445 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(13), o = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "mst_id", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_slotitem_id")
            }, enumerable: !0, configurable: !0
        }), t
    }();
    e.BonusSlotModel = o
}