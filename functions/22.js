const function22 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    ! function (t) {
        function e(t, e) {
            var i = t >= 0 ? "" : "-";
            t = Math.abs(t);
            for (var n = t > 0 ? Math.floor(Math.log(t) * Math.LOG10E + 1) : 1, o = "", r = 0, s = e - n; r < s; r++) o += "0";
            return i + o + t
        }

        function i(e) {
            var i = Math.floor(e / 36e5),
                n = Math.floor(e % 864e5 / 6e4) % 60,
                o = Math.floor(e % 864e5 / 1e3) % 60 % 60;
            return t.zeroPadding(i, 2) + ":" + t.zeroPadding(n, 2) + ":" + t.zeroPadding(o, 2)
        }

        function n(t) {
            if (t < 0 || t > 1) throw Error();
            var e, i = 255,
                n = 255;
            return t < 1 / 3 ? (e = 3 * t, n = Math.round(0 + 128 * e)) : t < 1 / 3 * 2 ? (e = 3 * (t - 1 / 3), n = Math.round(128 + 3 * (t - 1 / 3) * 128)) : (e = 3 * (t - 1 / 3 * 2), i = Math.round(255 - 255 * e)), (i << 16) + (n << 8)
        }
        t.zeroPadding = e, t.timeToString = i, t.getColor = n
    }(e.MathUtil || (e.MathUtil = {}))
}