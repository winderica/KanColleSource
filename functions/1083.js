const function1083 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = function () {
            function t() {}
            return t.prototype.check = function (t, e, i) {
                void 0 === i && (i = !1);
                var o = n.default.model.expedition.get(t);
                if (null == o || null == e) return {
                    result: !1,
                    reason: 0
                };
                var r = e.getCount();
                if (0 == r) return {
                    result: !1,
                    reason: 31
                };
                if (r > 6) return {
                    result: !1,
                    reason: 36
                };
                if (e.isCombined_Main() || e.isCombined_Sub()) return {
                    result: !1,
                    reason: 22
                };
                if (1 == o.reset_type) {
                    var s = n.default.model.expedition.getLimitTime(1),
                        a = Date.now() + 60 * o.time * 1e3;
                    if (1 == i || a > 1e3 * s) return {
                        result: !1,
                        reason: 50
                    }
                }
                var _ = e.getShipList(),
                    u = o.isSupport();
                if (u) {
                    for (var l = 0, c = 0, h = _; c < h.length; c++) {
                        var p = h[c];
                        null != p && (2 == p.shipTypeID && l++)
                    }
                    if (l < 2) return {
                        result: !1,
                        reason: 13
                    }
                }
                if (null != e.expedition) return {
                    result: !1,
                    reason: 30
                };
                for (var d = n.default.model.ndock.getShipMemIDs(), f = !1, y = !1, m = !0, g = 0, v = _; g < v.length; g++) {
                    var p = v[g];
                    null != p && (d.indexOf(p.memID) >= 0 && (f = !0), (p.fuelNow <= 0 || p.ammoNow <= 0) && (y = !0), (p.fuelNow < p.fuelMax || p.ammoNow < p.ammoMax) && (m = !1))
                }
                if (f) return {
                    result: !1,
                    reason: 1
                };
                if (u && 0 == m) return {
                    result: !1,
                    reason: 14
                };
                if (y) return {
                    result: !1,
                    reason: 2
                };
                var b = _[0].getDamageType();
                return 25 == b || 0 == b ? {
                    result: !1,
                    reason: 3
                } : {
                    result: !0,
                    reason: 0
                }
            }, t
        }();
    e.ExpeditionCondition = o
}