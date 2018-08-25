/*
 * the function called by `13.js`
 * map util
 */
const function74 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(23);
    !function (t) {
        // 5-4 to 54
        function e(t, e) {
            return 10 * t + e
        }

        // get 5 of 54
        function i(t) {
            return Math.floor(t / 10)
        }

        // get 4 of 54
        function o(t) {
            return t % 10
        }

        // ??
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