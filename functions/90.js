const function90 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(52),
        o = i(140),
        r = i(28),
        s = i(0),
        a = i(813);
    ! function (t) {
        function e(t, e) {
            var i = s.default.model.ship_upgrade.getRequiredLevel(t);
            return 0 != i && !(e < i)
        }

        function i(t) {
            switch (t) {
                case 149:
                case 277:
                case 594:
                case 350:
                case 293:
                    return !0;
                default:
                    return !1
            }
        }

        function _(t) {
            var e = 0 == t ? 0 : t / n.RemodelConst.ITEM_NUM;
            return e += 0 == t ? 0 : 0 < t % n.RemodelConst.ITEM_NUM ? 1 : 0, e = Math.floor(e)
        }

        function u(t, e) {
            return 0 == t.isExtraSlot() && t.level >= n.RemodelConst.EXTRA_SLOT_LEVEL && 0 < e
        }

        function l(t) {
            var e = new Array,
                i = t.powUp;
            0 < i[0] && e.push(o.PowerUpCategory.Karyoku), 0 < i[1] && e.push(o.PowerUpCategory.Raisou), 0 < i[2] && e.push(o.PowerUpCategory.Taiku), 0 < i[3] && e.push(o.PowerUpCategory.Soukou);
            for (var n = 0; n < 4 && e.length < 4; n++) e.push(o.PowerUpCategory.EMPTY);
            return e
        }

        function c(t, e) {
            function i(t, e, i, n) {
                return t.getClassType() == e && (void 0 == i[t.yomi] && (i[t.yomi] = 0), ++i[t.yomi] >= n)
            }
            for (var n = t[0], o = t[1], r = o.hougMax - o.hougMin, s = o.raigMax - o.raigMin, _ = o.tykuMax - o.tykuMin, u = o.soukMax - o.soukMin, l = 0, c = 0, h = 0, p = 0, d = 0, f = 0; f < e.length; f++) {
                var y = e[f],
                    m = y.powUp;
                l += m[0], c += m[1], h += m[2], p += m[3], d += m[4]
            }
            for (var g = 0, v = {}, b = {}, w = {}, x = !1, I = !1, f = 0; f < e.length; f++) {
                var T = e[f],
                    O = T.shipTypeID,
                    C = T.getClassType().toString();
                if (1 == O) {
                    var P = v[C];
                    P || (v[C] = P = new Array), -1 == P.indexOf(T.yomi) && P.push(T.yomi), g++
                }
                0 == x && (x = i(e[f], 62, b, 2)), 0 == I && (I = i(e[f], 72, w, 2))
            }
            var k = o.getClassType(),
                S = !1;
            if (n.gradeUpTaikyu < n.VHP && n.taikyu < o.taikyuMax) {
                var M = !1;
                for (var A in v) {
                    var P = v[A];
                    2 <= P.length && (M = !0)
                }
                M ? S = !0 : x && [62, 72].indexOf(k) >= 0 ? S = !0 : I && [72, 62, 41, 37].indexOf(k) >= 0 && (S = !0)
            }
            l = Math.floor(1.2 * l + .3), c = Math.floor(1.2 * c + .3), h = Math.floor(1.2 * h + .3), p = Math.floor(1.2 * p + .3), d = Math.floor(1.2 * d + .3);
            var E = n.gradeUpHoug + l,
                j = n.gradeUpRaig + c,
                N = n.gradeUpTyku + h,
                L = n.gradeUpSouk + p;
            r <= E && (l = r - n.gradeUpHoug), s <= j && (c = s - n.gradeUpRaig), _ <= N && (h = _ - n.gradeUpTyku), u <= L && (p = u - n.gradeUpSouk);
            var B = Math.max(o.luckMax - o.luckMin - n.gradeUpLuck, 0);
            d = Math.min(d, B);
            var R = !1,
                D = !1;
            return g >= 1 && (R = !0, D = !0, B <= 0 && (D = !1), n.gradeUpTaisen >= n.VAS ? R = !1 : n.taisenMax <= 0 && (R = !1)), new a.PowerUpCheckModel(l, c, h, p, d, D, S, R)
        }

        function h() {
            var t = new Array;
            t = r.ShipUtil.getMemIDsInExpedition(), t = t.concat(s.default.model.ndock.getShipMemIDs()), t.push(s.default.model.deck.get(1).getShipMemID(0));
            var e = s.default.model.ship.getAll();
            return r.ShipUtil.filter(e, !0, t)
        }

        function p(t, e) {
            var i = new Array,
                n = s.default.model.shipType.getAllExId(),
                o = s.default.model.slot.getExtraEquipShipData(t),
                r = s.default.model.equip.get(t).equip_type,
                a = new Array;
            r.forEach(function (t) {
                -1 < n.indexOf(t) && a.push(t)
            });
            var _ = s.default.model.slot.createUnsetList(a),
                u = []; - 1 < r.indexOf(17) && (u = s.default.model.slot.createUnsetListFromMstId(33));
            for (var l = [], c = (new Array, 0); c < o.length; c++) {
                var h = o[c],
                    p = s.default.model.slot.createUnsetListFromMstId(h);
                l = l.concat(p)
            }
            for (var d = 0; d < _.length; d++) {
                var f = _[d],
                    y = -1 < i.indexOf(f) == 0;
                y && i.push(f)
            }
            for (var d = 0; d < u.length; d++) {
                var f = u[d],
                    y = -1 < i.indexOf(f) == 0;
                y && i.push(f)
            }
            for (var d = 0; d < l.length; d++) {
                var f = l[d],
                    y = -1 < i.indexOf(f) == 0;
                y && i.push(f)
            }
            return i
        }

        function d(t, e, i) {
            var n = s.default.model.ship.get(t),
                o = [],
                r = n.getSlotitemEx(),
                a = n.getSlotitems(),
                _ = null == r ? -1 : r.memID;
            o.push(_), a.forEach(function (t) {
                t && o.push(t.memID)
            });
            var u = [],
                l = {},
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
                ], g = (new Array, 0); g < h.length; g++) {
                var v = h[g],
                    b = s.default.model.slot.createSetListFromMstId(v);
                m[0] = m[0].concat(b[0]);
                for (var w = 0; w < b[0].length; w++) {
                    var x = b[0][w].memID;
                    m[1][x] = b[1][x]
                }
            }
            for (var w = 0; w < f[0].length; w++) {
                var I = f[0][w],
                    T = -1 < u.indexOf(I) == 0;
                T && (u.push(I), l[I.memID] = f[1][I.memID])
            }
            for (var w = 0; w < y[0].length; w++) {
                var I = y[0][w],
                    T = -1 < u.indexOf(I) == 0;
                T && (u.push(I), l[I.memID] = y[1][I.memID])
            }
            for (var w = 0; w < m[0].length; w++) {
                var I = m[0][w],
                    T = -1 < u.indexOf(I) == 0;
                T && (u.push(I), l[I.memID] = m[1][I.memID])
            }
            return u = u.filter(function (t) {
                return -1 == o.indexOf(t.memID)
            }), o.forEach(function (t) {
                delete l[t]
            }), [u, l]
        }
        t.canKaizo = e, t.isSpKaizo = i, t.calcPageCount = _, t.testExtensionableExtraslot = u, t.genPowUpCategories = l, t.calcPowerUpParams = c, t.createShipListForPowerUp = h, t.createUnSetListEx = p, t.createSetListEx = d
    }(e.RemodelUtil || (e.RemodelUtil = {}))
}