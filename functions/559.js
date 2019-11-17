const function559 = function (t, e, i) {
    var n = i(275),
        o = {
            delimiter: "&",
            depth: 5,
            arrayLimit: 20,
            parameterLimit: 1e3
        };
    o.parseValues = function (t, e) {
        for (var i = {}, o = t.split(e.delimiter, e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit), r = 0, s = o.length; r < s; ++r) {
            var a = o[r],
                _ = -1 === a.indexOf("]=") ? a.indexOf("=") : a.indexOf("]=") + 1;
            if (-1 === _) i[n.decode(a)] = "";
            else {
                var l = n.decode(a.slice(0, _)),
                    u = n.decode(a.slice(_ + 1));
                i.hasOwnProperty(l) ? i[l] = [].concat(i[l]).concat(u) : i[l] = u
            }
        }
        return i
    }, o.parseObject = function (t, e, i) {
        if (!t.length) return e;
        var n = t.shift(),
            r = {};
        if ("[]" === n) r = [], r = r.concat(o.parseObject(t, e, i));
        else {
            var s = "[" === n[0] && "]" === n[n.length - 1] ? n.slice(1, n.length - 1) : n,
                a = parseInt(s, 10),
                _ = "" + a;
            !isNaN(a) && n !== s && _ === s && a <= i.arrayLimit ? (r = [], r[a] = o.parseObject(t, e, i)) : r[s] = o.parseObject(t, e, i)
        }
        return r
    }, o.parseKeys = function (t, e, i) {
        if (t) {
            var n = /^([^\[\]]*)/,
                r = /(\[[^\[\]]*\])/g,
                s = n.exec(t);
            if (!Object.prototype.hasOwnProperty(s[1])) {
                var a = [];
                s[1] && a.push(s[1]);
                for (var _ = 0; null !== (s = r.exec(t)) && _ < i.depth;) ++_, Object.prototype.hasOwnProperty(s[1].replace(/\[|\]/g, "")) || a.push(s[1]);
                return s && a.push("[" + t.slice(s.index) + "]"), o.parseObject(a, e, i)
            }
        }
    }, t.exports = function (t, e) {
        if ("" === t || null === t || void 0 === t) return {};
        e = e || {}, e.delimiter = "string" == typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : o.delimiter, e.depth = "number" == typeof e.depth ? e.depth : o.depth, e.arrayLimit = "number" == typeof e.arrayLimit ? e.arrayLimit : o.arrayLimit, e.parameterLimit = "number" == typeof e.parameterLimit ? e.parameterLimit : o.parameterLimit;
        for (var i = "string" == typeof t ? o.parseValues(t, e) : t, r = {}, s = Object.keys(i), a = 0, _ = s.length; a < _; ++a) {
            var l = s[a],
                u = o.parseKeys(l, i[l], e);
            r = n.merge(r, u)
        }
        return n.compact(r)
    }
}