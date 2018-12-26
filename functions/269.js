const function269 = function (t, e) {
    e.arrayToObject = function (t) {
        for (var e = {}, i = 0, n = t.length; i < n; ++i) void 0 !== t[i] && (e[i] = t[i]);
        return e
    }, e.merge = function (t, i) {
        if (!i) return t;
        if ("object" != typeof i) return t.push(i), t;
        if ("object" != typeof t) return t = [t].concat(i);
        Array.isArray(t) && !Array.isArray(i) && (t = e.arrayToObject(t));
        for (var n = Object.keys(i), o = 0, r = n.length; o < r; ++o) {
            var s = n[o],
                a = i[s];
            t[s] ? t[s] = e.merge(t[s], a) : t[s] = a
        }
        return t
    }, e.decode = function (t) {
        try {
            return decodeURIComponent(t.replace(/\+/g, " "))
        } catch (e) {
            return t
        }
    }, e.compact = function (t, i) {
        if ("object" != typeof t || null === t) return t;
        i = i || [];
        var n = i.indexOf(t);
        if (-1 !== n) return i[n];
        if (i.push(t), Array.isArray(t)) {
            for (var o = [], r = 0, s = t.length; r < s; ++r) void 0 !== t[r] && o.push(t[r]);
            return o
        }
        for (var a = Object.keys(t), r = 0, _ = a.length; r < _; ++r) {
            var l = a[r];
            t[l] = e.compact(t[l], i)
        }
        return t
    }, e.isRegExp = function (t) {
        return "[object RegExp]" === Object.prototype.toString.call(t)
    }, e.isBuffer = function (t) {
        return null !== t && void 0 !== t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
    }
}