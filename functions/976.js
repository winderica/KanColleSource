const function976 = function (t, e, i) {
    "use strict";

    function n(t, e, i, n) {
        if (0 == e.getCount()) return { result: !1, reason: 31 };
        var _ = o(t, e);
        if (null != _) return _;
        var u = t.mst_id, l = e.getShipListAll();
        if (16 == u && null != (_ = r(l))) return _;
        if (63 == u && null != (_ = s(l))) return _;
        if (64 == u && null != (_ = a(l))) return _;
        if (null != e.expedition) return { result: !1, reason: 30 };
        if (null != n) {
            var c = e.getCombinedType(), h = n.check(c, l);
            if (0 == h.result || 0 != h.reason) return h
        }
        for (var p = !1, d = !1, f = 0, y = l; f < y.length; f++) {
            var m = y[f];
            null != m && (-1 != i.indexOf(m.memID) && (p = !0), (m.fuelNow <= 0 || m.ammoNow <= 0) && (d = !0))
        }
        if (1 == p) return { result: !1, reason: 1 };
        if (1 == d) return { result: !1, reason: 2 };
        var v = l[0].getDamageType();
        if (0 != e.getCombinedType()) {
            if (50 == v || 25 == v || 0 == v) return { result: !1, reason: 21 };
            var g = l[6].getDamageType();
            if (50 == g || 25 == g || 0 == g) return { result: !1, reason: 21 }
        } else if (25 == v || 0 == v) return { result: !1, reason: 3 };
        return 1 == e.isCombined_Sub() ? { result: !1, reason: 20 } : { result: !0, reason: 0 }
    }

    function o(t, e) {
        var i = e.getCombinedType(), n = t.getAllowedDeckType();
        if (0 == i) {
            if (e.getCount() > 6) return 1 == n.yugeki ? null : { result: !1, reason: 36 };
            if (1 == n.normal) return null
        }
        var o = n.rengo;
        return 0 != o || 1 != i && 2 != i && 3 != i ? 1 == o && 1 != i ? {
            result: !1,
            reason: 23
        } : 2 == o && 2 != i ? { result: !1, reason: 24 } : 3 == o && 1 != i && 2 != i ? {
            result: !1,
            reason: 25
        } : 4 == o && 3 != i ? { result: !1, reason: 28 } : 5 == o && 1 != i && 3 != i ? {
            result: !1,
            reason: 26
        } : 6 == o && 2 != i && 3 != i ? {
            result: !1,
            reason: 27
        } : 7 == o && 1 != i && 2 != i && 3 != i ? { result: !1, reason: 29 } : null : { result: !1, reason: 22 }
    }

    function r(t) {
        for (var e = 0, i = t; e < i.length; e++) {
            var n = i[e];
            if (null != n) {
                switch (n.shipTypeID) {
                    case 4:
                    case 8:
                    case 9:
                    case 11:
                    case 13:
                    case 14:
                    case 18:
                        return { result: !1, reason: 4 }
                }
            }
        }
        return null
    }

    function s(t) {
        for (var e = 0, i = 0, n = 0, o = 0, r = t; o < r.length; o++) {
            var s = r[o];
            if (null != s) {
                var a = s.shipTypeID;
                if (2 == a) e++; else if (3 == a) i++; else if (21 == a) i++; else {
                    if (16 != a) return { result: !1, reason: 5 };
                    n++
                }
            }
        }
        return 0 == e ? { result: !1, reason: 6 } : 0 == i ? { result: !1, reason: 7 } : i >= 4 ? {
            result: !1,
            reason: 8
        } : 0 == n ? { result: !1, reason: 9 } : n >= 3 ? { result: !1, reason: 10 } : null
    }

    function a(t) {
        for (var e = 0, i = 0, n = 0, o = t; n < o.length; n++) {
            var r = o[n];
            if (null != r) {
                var s = r.shipTypeID;
                8 == s ? e++ : 9 == s ? e++ : 10 == s ? e++ : 7 == s ? i++ : 11 == s ? i++ : 18 == s && i++
            }
        }
        return e >= 3 ? { result: !1, reason: 11 } : i >= 3 ? { result: !1, reason: 12 } : null
    }

    Object.defineProperty(e, "__esModule", { value: !0 }), e.check = n
}