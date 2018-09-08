const function1162 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "no", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_no")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "type", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_kind")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "mst_id", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_mst_id")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "level", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_slotitem_level")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "count", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_count")
            }, enumerable: !0, configurable: !0
        }), t
    }();
    e.DutyRewardCandidateModel = o
}