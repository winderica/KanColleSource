const function1043 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = function () {
            function t() {}
            return t.prototype.check = function (t, e) {
                var i = n.default.model.expedition.get(t),
                    o = n.default.model.expedition.getLimitTime();
                if (null == i || null == e) return {
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
                if (1 == i.reset_type) {
                    if (2 == i.state) return {
                        result: !1,
                        reason: 0
                    };
                    var s = Math.floor(Date.now() / 1e3);
                    if (s + 60 * i.time >= o[0]) return {
                        result: !1,
                        reason: 0
                    }
                }
                var a = e.getShipList(),
                    _ = i.isSupport();
                if (_) {
                    for (var u = 0, l = 0, c = a; l < c.length; l++) {
                        var h = c[l];
                        null != h && (2 == h.shipTypeID && u++)
                    }
                    if (u < 2) return {
                        result: !1,
                        reason: 13
                    }
                }
                if (null != e.expedition) return {
                    result: !1,
                    reason: 30
                };
                for (var p = n.default.model.ndock.getShipMemIDs(), d = !1, f = !1, y = !0, m = 0, g = a; m < g.length; m++) {
                    var h = g[m];
                    null != h && (p.indexOf(h.memID) >= 0 && (d = !0), (h.fuelNow <= 0 || h.ammoNow <= 0) && (f = !0), (h.fuelNow < h.fuelMax || h.ammoNow < h.ammoMax) && (y = !1))
                }
                if (d) return {
                    result: !1,
                    reason: 1
                };
                if (_ && 0 == y) return {
                    result: !1,
                    reason: 14
                };
                if (f) return {
                    result: !1,
                    reason: 2
                };
                var v = a[0].getDamageType();
                return 25 == v || 0 == v ? {
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