const function17 = function (t, e, i) {
    "use strict";

    function n(t) {
        for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i])
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n(i(22)), n(i(144)), n(i(44)), n(i(257)), n(i(145)), e.START_TIME = (new Date).getTime(), e.RANK_NAME = ["", "\u5143\u5e25", "\u5927\u5c06", "\u4e2d\u5c06", "\u5c11\u5c06", "\u5927\u4f50", "\u4e2d\u4f50", "\u65b0\u7c73\u4e2d\u4f50", "\u5c11\u4f50", "\u4e2d\u5805\u5c11\u4f50", "\u65b0\u7c73\u5c11\u4f50"], e.PORT_API_SEED = [7501, 9093, 3045, 3183, 9940, 3340, 2810, 4179, 6251, 6418], e.COMBINABLE = !1, e.EVENT_AREA_ID = -1, e.MAMIYA_IRAKO_SEASON = 0;
    var o = window.navigator.userAgent.toLowerCase(),
        r = /edge/i.test(o),
        s = /chrome/i.test(o) && !r,
        a = /ip(hone|ad|od)/i.test(o),
        _ = /safari/i.test(o) && !r && a;
    e.HTML5_AUDIO = s || _
}