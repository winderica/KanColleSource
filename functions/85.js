const function85 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(51), o = i(132), r = i(31), s = i(0), a = i(772);
    !function (t) {
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

        function u(t) {
            var e = new Array, i = t.powUp;
            0 < i[0] && e.push(o.PowerUpCategory.Karyoku), 0 < i[1] && e.push(o.PowerUpCategory.Raisou), 0 < i[2] && e.push(o.PowerUpCategory.Taiku), 0 < i[3] && e.push(o.PowerUpCategory.Soukou);
            for (var n = 0; n < 4 && e.length < 4; n++) e.push(o.PowerUpCategory.EMPTY);
            return e
        }

        function l(t, e) {
            for (var i = t[0], n = t[1], o = n.hougMax - n.hougMin, r = n.raigMax - n.raigMin, s = n.tykuMax - n.tykuMin, _ = n.soukMax - n.soukMin, u = n.luckMax - n.luckMin, l = 0, c = 0, h = 0, p = 0, d = 0, f = 0; f < e.length; f++) {
                var y = e[f], v = y.powUp, g = y.shipTypeID, m = y.getClassType().toString();
                l += v[0], c += v[1], h += v[2], p += v[3], d += v[4]
            }
            for (var b = 0, w = {}, f = 0; f < e.length; f++) {
                var x = e[f], g = x.shipTypeID, m = x.getClassType().toString();
                if (1 == g) {
                    var I = w[m];
                    I || (w[m] = I = new Array), -1 == I.indexOf(x.yomi) && I.push(x.yomi), b++
                }
            }
            var T = !1;
            for (var O in w) {
                var I = w[O];
                2 <= I.length && (T = !0)
            }
            var P = !1, C = !1, k = !1;
            1 <= b && (0 < u && (P = !0), 0 < i.taisenMax && i.gradeUpTaisen < i.VAS && (k = !0)), T && i.gradeUpTaikyu < i.VHP && (C = !0), l = Math.floor(1.2 * l + .3), c = Math.floor(1.2 * c + .3), h = Math.floor(1.2 * h + .3), p = Math.floor(1.2 * p + .3), d = Math.floor(1.2 * d + .3);
            var M = i.gradeUpHoug + l, S = i.gradeUpRaig + c, A = i.gradeUpTyku + h, j = i.gradeUpSouk + p,
                E = i.gradeUpLuck + d;
            return o <= M && (l = o - i.gradeUpHoug), r <= S && (c = r - i.gradeUpRaig), s <= A && (h = s - i.gradeUpTyku), _ <= j && (p = _ - i.gradeUpSouk), u <= E && (d = u - i.gradeUpLuck), new a.PowerUpCheckModel(l, c, h, p, d, P, C, k)
        }

        function c() {
            var t = new Array;
            t = r.ShipUtil.getMemIDsInExpedition(), t = t.concat(s.default.model.ndock.getShipMemIDs()), t.push(s.default.model.deck.get(1).getShipMemID(0));
            var e = s.default.model.ship.getAll();
            return r.ShipUtil.filter(e, !0, t)
        }

        function h(t, e) {
            var i = new Array, n = s.default.model.shipType.getAllExId(),
                o = s.default.model.slot.getExtraEquipShipData(t), r = s.default.model.equip.get(t).equip_type,
                a = new Array;
            r.forEach(function (t) {
                -1 < n.indexOf(t) && a.push(t)
            });
            var _ = s.default.model.slot.createUnsetList(a), u = [];
            -1 < r.indexOf(17) && (u = s.default.model.slot.createUnsetListFromMstId(33));
            for (var l = [], c = (new Array, 0); c < o.length; c++) {
                var h = o[c], p = s.default.model.slot.createUnsetListFromMstId(h);
                l = l.concat(p)
            }
            for (var d = 0; d < _.length; d++) {
                var f = _[d], y = -1 < i.indexOf(f) == 0;
                y && i.push(f)
            }
            for (var d = 0; d < u.length; d++) {
                var f = u[d], y = -1 < i.indexOf(f) == 0;
                y && i.push(f)
            }
            for (var d = 0; d < l.length; d++) {
                var f = l[d], y = -1 < i.indexOf(f) == 0;
                y && i.push(f)
            }
            return i
        }

        function p(t, e, i) {
            var n = s.default.model.ship.get(t), o = [], r = n.getSlotitemEx(), a = n.getSlotitems(),
                _ = null == r ? -1 : r.memID;
            o.push(_), a.forEach(function (t) {
                t && o.push(t.memID)
            });
            var u = [], l = {}, c = s.default.model.shipType.getAllExId(),
                h = s.default.model.slot.getExtraEquipShipData(e), p = s.default.model.equip.get(e).equip_type,
                d = new Array;
            p.forEach(function (t) {
                -1 < c.indexOf(t) && d.push(t)
            });
            var f = s.default.model.slot.createSetList(d), y = [[], {}];
            -1 < p.indexOf(17) && (y = s.default.model.slot.createSetListFromMstId(33));
            for (var v = [[], {}], g = (new Array, 0); g < h.length; g++) {
                var m = h[g], b = s.default.model.slot.createSetListFromMstId(m);
                v[0] = v[0].concat(b[0]);
                for (var w = 0; w < b[0].length; w++) {
                    var x = b[0][w].memID;
                    v[1][x] = b[1][x]
                }
            }
            for (var w = 0; w < f[0].length; w++) {
                var I = f[0][w], T = -1 < u.indexOf(I) == 0;
                T && (u.push(I), l[I.memID] = f[1][I.memID])
            }
            for (var w = 0; w < y[0].length; w++) {
                var I = y[0][w], T = -1 < u.indexOf(I) == 0;
                T && (u.push(I), l[I.memID] = y[1][I.memID])
            }
            for (var w = 0; w < v[0].length; w++) {
                var I = v[0][w], T = -1 < u.indexOf(I) == 0;
                T && (u.push(I), l[I.memID] = v[1][I.memID])
            }
            return u = u.filter(function (t) {
                return -1 == o.indexOf(t.memID)
            }), o.forEach(function (t) {
                delete l[t]
            }), [u, l]
        }

        t.canKaizo = e, t.calcPageCount = i, t.testExtensionableExtraslot = _, t.genPowUpCategories = u, t.calcPowerUpParams = l, t.createShipListForPowerUp = c, t.createUnSetListEx = h, t.createSetListEx = p
    }(e.RemodelUtil || (e.RemodelUtil = {}))
}