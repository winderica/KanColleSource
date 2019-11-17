const function558 = function (t, e, i) {
    var n = i(275),
        o = {
            delimiter: "&"
        };
    o.stringify = function (t, e) {
        if (n.isBuffer(t) ? t = t.toString() : t instanceof Date ? t = t.toISOString() : null === t && (t = ""), "string" == typeof t || "number" == typeof t || "boolean" == typeof t) return [encodeURIComponent(e) + "=" + encodeURIComponent(t)];
        var i = [];
        if (void 0 === t) return i;
        for (var r = Object.keys(t), s = 0, a = r.length; s < a; ++s) {
            var _ = r[s];
            i = i.concat(o.stringify(t[_], e + "[" + _ + "]"))
        }
        return i
    }, t.exports = function (t, e) {
        e = e || {};
        for (var i = void 0 === e.delimiter ? o.delimiter : e.delimiter, n = [], r = Object.keys(t), s = 0, a = r.length; s < a; ++s) {
            var _ = r[s];
            n = n.concat(o.stringify(t[_], _))
        }
        return n.join(i)
    }
}