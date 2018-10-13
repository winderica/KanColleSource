/*
 * util
 * math util
 */
const function23 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    !function (t) {

        /*
         * padding with zeros: 123, 5 -> 00123; -123, 5 -> -00123
         * t: number; // original number
         * e: number; // length of result
         */
        function e(t, e) {
            var i = t >= 0 ? "" : "-";
            t = Math.abs(t);
            for (var n = t > 0 ? Math.floor(Math.log(t) * Math.LOG10E + 1) : 1, o = "", r = 0, s = e - n; r < s; r++) o += "0";
            return i + o + t
        }
        /*
         * number to HH:MM:SS: 10000000 -> "02:46:40"
         * e: number;
         */
        function i(e) {
            var i = Math.floor(e / 36e5), n = Math.floor(e % 864e5 / 6e4) % 60,
                o = Math.floor(e % 864e5 / 1e3) % 60 % 60;
            return t.zeroPadding(i, 2) + ":" + t.zeroPadding(n, 2) + ":" + t.zeroPadding(o, 2)
        }

        /*
         * number to color
         * t: number;
         * 0 <= t < 1/3: #FF**00
         * 1/3 <= t < 2/3: #FF**00
         * 2/3 <= t < 1: #**FF00
         */
        function n(t) {
            if (t < 0 || t > 1) throw Error();
            var e, i = 255, n = 255;
            if (t < 1 / 3) {
                (e = 3 * t, n = Math.round(0 + 128 * e))
            } else {
                if (t < 1 / 3 * 2) {
                    e = 3 * (t - 1 / 3), n = Math.round(128 + 3 * (t - 1 / 3) * 128)
                } else {
                    e = 3 * (t - 1 / 3 * 2), i = Math.round(255 - 255 * e)
                }
            }
            return (i << 16) + (n << 8)
        }

        t.zeroPadding = e, t.timeToString = i, t.getColor = n
    }(e.MathUtil || (e.MathUtil = {}))
}