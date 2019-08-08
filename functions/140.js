const function140 = function (t, e, i) {
    "use strict";

    function n() {
        var t = new Date,
            e = t.getTime(),
            i = -5;
        i = i < 0 ? 24 + i : i;
        var n = new Date(e).setUTCHours(i, 40, 0, 0),
            r = o(e, n);
        return r
    }

    function o(t, e) {
        if (t == e) return !0;
        if (t > e) {
            return t - e < 246e4
        }
        var i = new Date(e);
        return o(t, i.setUTCDate(i.getUTCDate() - 1))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    i(15);
    e.isNeedKeyAtBattleStartAPI = n
}