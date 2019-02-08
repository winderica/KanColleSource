const function17 = function (t, e, i) {
    "use strict";

    function n(t) {
        for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i])
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n(i(24)), n(i(142)), n(i(45)), n(i(258)), n(i(143)), e.START_TIME = (new Date).getTime(), e.RANK_NAME = ["", "\u5143\u5e25", "\u5927\u5c06", "\u4e2d\u5c06", "\u5c11\u5c06", "\u5927\u4f50", "\u4e2d\u4f50", "\u65b0\u7c73\u4e2d\u4f50", "\u5c11\u4f50", "\u4e2d\u5805\u5c11\u4f50", "\u65b0\u7c73\u5c11\u4f50"], e.PORT_API_SEED = [6521, 9136, 4344, 3668, 2383, 9710, 3612, 5049, 8911, 2735], e.COMBINABLE = !1, e.EVENT_AREA_ID = -1, e.MAMIYA_IRAKO_SEASON = 1;
    var o = window.navigator.userAgent.toLowerCase(),
        r = /chrome/i.test(o) && !1 === /edge/i.test(o),
        s = /ip(hone|ad|od)/i.test(o);
    e.HTML5_AUDIO = r && !1 === s
}