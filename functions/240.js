const function240 = function (t, e, i) {
    "use strict";

    function n(t) {
        return t <= 0 ? "\u306a\u3057" : t <= .3 ? "\u5c11\u91cf" : "\u666e\u901a"
    }

    function o(t) {
        var e = Math.floor(t / 6e4 / 60),
            i = Math.floor(t / 6e4 % 60),
            n = "";
        return e < 10 && (n += "0"), n += e + ":", i < 10 && (n += "0"), n += "" + i
    }

    function r(t) {
        var e = Math.floor(t / 60),
            i = Math.floor(t % 60),
            n = "";
        return 0 < e && (n = e + ":", i < 10 && (n += "0")), n += "" + i
    }

    function s(t) {
        switch (t) {
            case 1:
                return 5;
            case 2:
                return 4;
            case 3:
            case 4:
                return 3;
            case 5:
            case 6:
                return 2;
            case 7:
                return 1;
            case 8:
            case 9:
                return 0;
            case 10:
                return 8;
            case 11:
                return 1;
            case 12:
                return 0;
            case 13:
            case 14:
                return 6;
            case 15:
            case 16:
            case 17:
                return 7;
            case 18:
                return 1;
            case 19:
            case 20:
                return 7;
            case 21:
                return 9;
            case 22:
                return 7
        }
        throw new Error("UNSUPPORT_TYPE")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.useMaterialToString = n, e.millisecondToFormatHHMM = o, e.minuteToFormatHHMM = r, e.shipTypeIdToCategory = s
}