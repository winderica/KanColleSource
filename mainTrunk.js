const functions = [];

!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.KCS = e() : t.KCS = e()
}(this, function () {
    return function (t) {
        function e(n) {
            if (i[n]) return i[n].exports;
            var o = i[n] = { i: n, l: !1, exports: {} };
            return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }

        var i = {};
        return e.m = t, e.c = i, e.d = function (t, i, n) {
            e.o(t, i) || Object.defineProperty(t, i, { configurable: !1, enumerable: !0, get: n })
        }, e.n = function (t) {
            var i = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(i, "a", i), i
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 474)
    }(functions).default
});