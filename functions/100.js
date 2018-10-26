const function100 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(261);
    !function (t) {
        function e(t) {
            var e = 0;
            if (null != t && "" != t) for (var i = 0; i < t.length; i++) e += t.charCodeAt(i);
            return e
        }

        function i(e, i) {
            var o = e.toString().match(/\d+/);
            if (null == o || 0 == o.length) return "";
            var r = parseInt(o[0]), s = t.createKey(i), a = null == i || 0 == i.length ? 1 : i.length;
            return (17 * (r + 7) * n.resource[(s + r * a) % 100] % 8973 + 1e3).toString()
        }

        t.createKey = e, t.create = i
    }(e.SuffixUtil || (e.SuffixUtil = {}))
}