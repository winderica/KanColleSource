const function1027 = function (t, e, i) {
    "use strict";

    function n(t, e, i, n, _) {
        if (0 == e.getCount()) return {
            result: !1,
            reason: 31
        };
        var u = o(t, e);
        if (null != u) return u;
        var l = t.mst_id,
            c = e.getShipListAll();
        if (16 == l && null != (u = r(c))) return u;
        if (63 == l && null != (u = s(c))) return u;
        if (64 == l && null != (u = a(c))) return u;
        if (null != e.expedition) return {
            result: !1,
            reason: 30
        };
        if (null != n) {
            var h = e.getCombinedType(),
                p = n.check(h, c);
            if (0 == p.result || 0 != p.reason) return p
        }
        for (var d = !1, f = !1, y = 0, m = c; y < m.length; y++) {
            var g = m[y];
            null != g && (-1 != i.indexOf(g.memID) && (d = !0), (g.fuelNow <= 0 || g.ammoNow <= 0) && (f = !0))
        }
        if (1 == d) return {
            result: !1,
            reason: 1
        };
        if (1 == f) return {
            result: !1,
            reason: 2
        };
        var v = c[0].getDamageType();
        if (0 != e.getCombinedType()) {
            if (50 == v || 25 == v || 0 == v) return {
                result: !1,
                reason: 21
            };
            var b = c[6].getDamageType();
            if (50 == b || 25 == b || 0 == b) return {
                result: !1,
                reason: 21
            }
        } else if (25 == v || 0 == v) return {
            result: !1,
            reason: 3
        };
        return 1 == e.isCombined_Sub() ? {
            result: !1,
            reason: 20
        } : 1 == _ ? {
            result: !1,
            reason: 51
        } : {
            result: !0,
            reason: 0
        }
    }

    function o(t, e) {
        var i = e.getCombinedType(),
            n = t.getAllowedDeckType();
        if (0 == i) {
            if (e.getCount() > 6) return 1 == n.yugeki ? null : {
                result: !1,
                reason: 36
            };
            if (1 == n.normal) return null
        }
        var o = n.rengo;
        return 0 != o || 1 != i && 2 != i && 3 != i ? 1 == o && 1 != i ? {
            result: !1,
            reason: 23
        } : 2 == o && 2 != i ? {
            result: !1,
            reason: 24
        } : 3 == o && 1 != i && 2 != i ? {
            result: !1,
            reason: 25
        } : 4 == o && 3 != i ? {
            result: !1,
            reason: 28
        } : 5 == o && 1 != i && 3 != i ? {
            result: !1,
            reason: 26
        } : 6 == o && 2 != i && 3 != i ? {
            result: !1,
            reason: 27
        } : 7 == o && 1 != i && 2 != i && 3 != i ? {
            result: !1,
            reason: 29
        } : null : 432 == t.mst_id || 433 == t.mst_id ? {
            result: !1,
            reason: 46
        } : {
            result: !1,
            reason: 22
        }
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
                        return {
                            result: !1, reason: 4
                        }
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
                if (2 == a) e++;
                else if (3 == a) i++;
                else if (21 == a) i++;
                else {
                    if (16 != a) return {
                        result: !1,
                        reason: 5
                    };
                    n++
                }
            }
        }
        return 0 == e ? {
            result: !1,
            reason: 6
        } : 0 == i ? {
            result: !1,
            reason: 7
        } : i >= 4 ? {
            result: !1,
            reason: 8
        } : 0 == n ? {
            result: !1,
            reason: 9
        } : n >= 3 ? {
            result: !1,
            reason: 10
        } : null
    }

    function a(t) {
        for (var e = 0, i = 0, n = 0, o = t; n < o.length; n++) {
            var r = o[n];
            if (null != r) {
                var s = r.shipTypeID;
                8 == s ? e++ : 9 == s ? e++ : 10 == s ? e++ : 7 == s ? i++ : 11 == s ? i++ : 18 == s && i++
            }
        }
        return e >= 3 ? {
            result: !1,
            reason: 11
        } : i >= 3 ? {
            result: !1,
            reason: 12
        } : null
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.check = n
}