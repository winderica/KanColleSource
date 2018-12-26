const function87 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(52),
        o = i(132),
        r = i(30),
        s = i(0),
        a = i(781);
    ! function (t) {
        function e(t, e) {
            var i = s.default.model.ship_upgrade.getRequiredLevel(t);
            return 0 != i && !(e < i)
        }

        function i(t) {
            var e = 0 == t ? 0 : t / n.RemodelConst.ITEM_NUM;
            return e += 0 == t ? 0 : 0 < t % n.RemodelConst.ITEM_NUM ? 1 : 0, e = Math.floor(e)
        }

        function _(t, e) {
            return 0 == t.isExtraSlot() && t.level >= n.RemodelConst.EXTRA_SLOT_LEVEL && 0 < e
        }

        function l(t) {
            var e = new Array,
                i = t.powUp;
            0 < i[0] && e.push(o.PowerUpCategory.Karyoku), 0 < i[1] && e.push(o.PowerUpCategory.Raisou), 0 < i[2] && e.push(o.PowerUpCategory.Taiku), 0 < i[3] && e.push(o.PowerUpCategory.Soukou);
            for (var n = 0; n < 4 && e.length < 4; n++) e.push(o.PowerUpCategory.EMPTY);
            return e
        }

        function u(t, e) {
            for (var i = t[0], n = t[1], o = n.hougMax - n.hougMin, r = n.raigMax - n.raigMin, s = n.tykuMax - n.tykuMin, _ = n.soukMax - n.soukMin, l = 0, u = 0, c = 0, h = 0, p = 0, d = 0; d < e.length; d++) {
                var f = e[d],
                    y = f.powUp;
                l += y[0], u += y[1], c += y[2], h += y[3], p += y[4]
            }
            for (var m = 0, v = {}, d = 0; d < e.length; d++) {
                var g = e[d],
                    b = g.shipTypeID,
                    w = g.getClassType().toString();
                if (1 == b) {
                    var x = v[w];
                    x || (v[w] = x = new Array), -1 == x.indexOf(g.yomi) && x.push(g.yomi), m++
                }
            }
            var I = !1;
            for (var T in v) {
                var x = v[T];
                2 <= x.length && (I = !0)
            }
            var O = !1;
            I && i.gradeUpTaikyu < i.VHP && (O = !0), l = Math.floor(1.2 * l + .3), u = Math.floor(1.2 * u + .3), c = Math.floor(1.2 * c + .3), h = Math.floor(1.2 * h + .3), p = Math.floor(1.2 * p + .3);
            var P = i.gradeUpHoug + l,
                C = i.gradeUpRaig + u,
                k = i.gradeUpTyku + c,
                M = i.gradeUpSouk + h;
            o <= P && (l = o - i.gradeUpHoug), r <= C && (u = r - i.gradeUpRaig), s <= k && (c = s - i.gradeUpTyku), _ <= M && (h = _ - i.gradeUpSouk);
            var S = Math.max(n.luckMax - n.luckMin - i.gradeUpLuck, 0);
            p = Math.min(p, S);
            var A = !1,
                j = !1;
            return m >= 1 && (A = !0, j = !0, S <= 0 && (j = !1), i.gradeUpTaisen >= i.VAS ? A = !1 : i.taisenMax <= 0 && (A = !1)), new a.PowerUpCheckModel(l, u, c, h, p, j, O, A)
        }

        function c() {
            var t = new Array;
            t = r.ShipUtil.getMemIDsInExpedition(), t = t.concat(s.default.model.ndock.getShipMemIDs()), t.push(s.default.model.deck.get(1).getShipMemID(0));
            var e = s.default.model.ship.getAll();
            return r.ShipUtil.filter(e, !0, t)
        }

        function h(t, e) {
            var i = new Array,
                n = s.default.model.shipType.getAllExId(),
                o = s.default.model.slot.getExtraEquipShipData(t),
                r = s.default.model.equip.get(t).equip_type,
                a = new Array;
            r.forEach(function (t) {
                -1 < n.indexOf(t) && a.push(t)
            });
            var _ = s.default.model.slot.createUnsetList(a),
                l = []; - 1 < r.indexOf(17) && (l = s.default.model.slot.createUnsetListFromMstId(33));
            for (var u = [], c = (new Array, 0); c < o.length; c++) {
                var h = o[c],
                    p = s.default.model.slot.createUnsetListFromMstId(h);
                u = u.concat(p)
            }
            for (var d = 0; d < _.length; d++) {
                var f = _[d],
                    y = -1 < i.indexOf(f) == 0;
                y && i.push(f)
            }
            for (var d = 0; d < l.length; d++) {
                var f = l[d],
                    y = -1 < i.indexOf(f) == 0;
                y && i.push(f)
            }
            for (var d = 0; d < u.length; d++) {
                var f = u[d],
                    y = -1 < i.indexOf(f) == 0;
                y && i.push(f)
            }
            return i
        }

        function p(t, e, i) {
            var n = s.default.model.ship.get(t),
                o = [],
                r = n.getSlotitemEx(),
                a = n.getSlotitems(),
                _ = null == r ? -1 : r.memID;
            o.push(_), a.forEach(function (t) {
                t && o.push(t.memID)
            });
            var l = [],
                u = {},
                c = s.default.model.shipType.getAllExId(),
                h = s.default.model.slot.getExtraEquipShipData(e),
                p = s.default.model.equip.get(e).equip_type,
                d = new Array;
            p.forEach(function (t) {
                -1 < c.indexOf(t) && d.push(t)
            });
            var f = s.default.model.slot.createSetList(d),
                y = [
                    [], {}
                ]; - 1 < p.indexOf(17) && (y = s.default.model.slot.createSetListFromMstId(33));
            for (var m = [
                    [], {}
                ], v = (new Array, 0); v < h.length; v++) {
                var g = h[v],
                    b = s.default.model.slot.createSetListFromMstId(g);
                m[0] = m[0].concat(b[0]);
                for (var w = 0; w < b[0].length; w++) {
                    var x = b[0][w].memID;
                    m[1][x] = b[1][x]
                }
            }
            for (var w = 0; w < f[0].length; w++) {
                var I = f[0][w],
                    T = -1 < l.indexOf(I) == 0;
                T && (l.push(I), u[I.memID] = f[1][I.memID])
            }
            for (var w = 0; w < y[0].length; w++) {
                var I = y[0][w],
                    T = -1 < l.indexOf(I) == 0;
                T && (l.push(I), u[I.memID] = y[1][I.memID])
            }
            for (var w = 0; w < m[0].length; w++) {
                var I = m[0][w],
                    T = -1 < l.indexOf(I) == 0;
                T && (l.push(I), u[I.memID] = m[1][I.memID])
            }
            return l = l.filter(function (t) {
                return -1 == o.indexOf(t.memID)
            }), o.forEach(function (t) {
                delete u[t]
            }), [l, u]
        }
        t.canKaizo = e, t.calcPageCount = i, t.testExtensionableExtraslot = _, t.genPowUpCategories = l, t.calcPowerUpParams = u, t.createShipListForPowerUp = c, t.createUnSetListEx = h, t.createSetListEx = p
    }(e.RemodelUtil || (e.RemodelUtil = {}))
}