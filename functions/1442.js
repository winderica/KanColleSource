const function1442 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(13), o = function () {
        function t(t) {
            this._o = t
        }

        return t.prototype.getTargetShipIndexes = function () {
            if (null == this._o) return [];
            var t = n.ObjUtil.getNumArray(this._o, "api_escape_idx");
            if (null == t) return [];
            for (var e = [], i = 0; i < t.length; i++) e.push(t[i] - 1);
            return e
        }, t.prototype.getTowingShipIndexes = function () {
            if (null == this._o) return [];
            var t = n.ObjUtil.getNumArray(this._o, "api_tow_idx");
            if (null == t) return [];
            for (var e = [], i = 0; i < t.length; i++) e.push(t[i] - 1);
            return e
        }, t
    }();
    e.EscapeCandidateModel = o
}