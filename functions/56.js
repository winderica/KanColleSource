const function56 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(25);
    ! function (t) {
        function e(t, e) {
            return 10 * t + e
        }

        function i(t) {
            return Math.floor(t / 10)
        }

        function o(t) {
            return t % 10
        }

        function r(t, e) {
            void 0 === e && (e = 0);
            var r = t;
            if (e <= 0) {
                var s = t;
                r = i(s), e = o(s)
            }
            return n.MathUtil.zeroPadding(r, 3).toString() + n.MathUtil.zeroPadding(e, 2).toString()
        }
        t.toMapID = e, t.toAreaID = i, t.toMapNo = o, t.toResKey = r
    }(e.MapUtil || (e.MapUtil = {}))
}