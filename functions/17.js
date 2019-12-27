const function17 = function (t, e, i) {
    "use strict";

    function n(t) {
        for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i])
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n(i(22)), n(i(148)), n(i(43)), n(i(264)), n(i(149)), e.START_TIME = (new Date).getTime(), e.RANK_NAME = ["", "\u5143\u5e25", "\u5927\u5c06", "\u4e2d\u5c06", "\u5c11\u5c06", "\u5927\u4f50", "\u4e2d\u4f50", "\u65b0\u7c73\u4e2d\u4f50", "\u5c11\u4f50", "\u4e2d\u5805\u5c11\u4f50", "\u65b0\u7c73\u5c11\u4f50"], e.PORT_API_SEED = [6615, 8527, 3937, 6648, 3251, 7420, 6685, 9654, 9758, 4131], e.COMBINABLE = !0, e.EVENT_AREA_ID = 46, e.FRIENDLY = !0, e.MAMIYA_IRAKO_SEASON = 0;
    var o = window.navigator.userAgent.toLowerCase(),
        r = /edge/i.test(o),
        s = /chrome/i.test(o) && !r,
        a = /ip(hone|ad|od)/i.test(o);
    e.HTML5_AUDIO = s && !a
}