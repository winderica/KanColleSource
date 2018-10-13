/*
 * util
 * getters
 */
const function7 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    !function (t) {
        /*
         * e: object;
         * i: string; // key
         * n: any; // default value
         */

        function e(e, i, n) {
            return void 0 === n && (n = 0), t._getProp(e, i, n)
        }

        function i(e, i, n) {
            void 0 === n && (n = "");
            var o = t._getProp(e, i, n);
            return null == o && null != n && (o = n), o
        }

        function n(e, i, n) {
            void 0 === n && (n = null);
            var o = t._getProp(e, i, n);
            return o || n
        }

        function o(e, i, n) {
            void 0 === n && (n = null);
            var o = t._getProp(e, i, n);
            return o || n
        }

        function r(e, i, n) {
            void 0 === n && (n = null);
            var o = t._getProp(e, i, n);
            return o || n
        }

        function s(e, i, n) {
            void 0 === n && (n = null);
            var o = t._getProp(e, i, n);
            return null == o && null != n && (o = n), o
        }

        function a(t, e, i) {
            return void 0 === i && (i = !1), null == t || 0 == t.hasOwnProperty(e) ? i : t[e]
        }

        function _(t, e, i) {
            if (null != t && t.hasOwnProperty(e)) {
                var n = t[e];
                if (null != n && void 0 != n) return n
            }
            return i
        }

        t.getNumber = e, t.getString = i, t.getObjectArray = n, t.getNumArray = o, t.getStrArray = r, t.getObject = s, t.getBoolean = a, t._getProp = _
    }(e.ObjUtil || (e.ObjUtil = {}))
}