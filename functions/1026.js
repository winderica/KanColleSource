const function1026 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = function () {
        function t() {
        }

        return t.prototype.check = function (t, e) {
            var i = n.default.model.expedition.get(t);
            if (null == i || null == e) return { result: !1, reason: 0 };
            var o = e.getCount();
            if (0 == o) return { result: !1, reason: 31 };
            if (o > 6) return { result: !1, reason: 36 };
            if (e.isCombined_Main() || e.isCombined_Sub()) return { result: !1, reason: 22 };
            var r = e.getShipList(), s = i.isSupport();
            if (s) {
                for (var a = 0, _ = 0, u = r; _ < u.length; _++) {
                    var l = u[_];
                    null != l && (2 == l.shipTypeID && a++)
                }
                if (a < 2) return { result: !1, reason: 13 }
            }
            if (null != e.expedition) return { result: !1, reason: 30 };
            for (var c = n.default.model.ndock.getShipMemIDs(), h = !1, p = !1, d = !0, f = 0, y = r; f < y.length; f++) {
                var l = y[f];
                null != l && (c.indexOf(l.memID) >= 0 && (h = !0), (l.fuelNow <= 0 || l.ammoNow <= 0) && (p = !0), (l.fuelNow < l.fuelMax || l.ammoNow < l.ammoMax) && (d = !1))
            }
            if (h) return { result: !1, reason: 1 };
            if (s && 0 == d) return { result: !1, reason: 14 };
            if (p) return { result: !1, reason: 2 };
            var v = r[0].getDamageType();
            return 25 == v || 0 == v ? { result: !1, reason: 3 } : { result: !0, reason: 0 }
        }, t
    }();
    e.ExpeditionCondition = o
}