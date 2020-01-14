const function223 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(38),
        o = i(0);
    ! function (t) {
        function e(t) {
            var e = 0,
                i = 0,
                n = 0;
            return t.forEach(function (t) {
                var r = o.default.model.ship.get(t);
                e += r.getFuelForSupply(), i += r.getAmmoForSupply(), n += r.getBauxForSupply()
            }), {
                fuel: e,
                ammo: i,
                baux: n
            }
        }

        function i(e) {
            for (var i = o.default.model.deck.get(e), n = i.getCount(), r = 0; r < n; r++) {
                var s = i.getShipMemID(r);
                if (t.CheckRequireSupplyShip(s)) return !0
            }
            return !1
        }

        function r(e) {
            for (var i = o.default.model.deck.get(e), n = i.getCount(), r = 0; r < n; r++) {
                var s = i.getShipMemID(r);
                if (t.CheckRequireSupplyShipAll(s)) return !0
            }
            return !1
        }

        function s(e) {
            for (var i = o.default.model.deck.get(e), n = i.getCount(), r = 0; r < n; r++) {
                var s = i.getShipMemID(r);
                if (t.CheckRequireSupplyShipBaux(s)) return !0
            }
            return !1
        }

        function a(t) {
            var e = o.default.model.ship.get(t);
            return !(0 != (e.ammoMax <= e.ammoNow && e.fuelMax <= e.fuelNow))
        }

        function _(t) {
            for (var e = o.default.model.ship.get(t), i = 0 == (e.ammoMax <= e.ammoNow && e.fuelMax <= e.fuelNow), r = 0; r < e.slotNum; r++) {
                var s = e.getSlotitemTousai(r),
                    a = e.getSlotitemTousaiMax(r),
                    _ = e.getSlotitems()[r];
                if (_ && _.equipTypeSp == n.EquipType._41_OGATA_HIKOUTEI && (a = 1), a > s) {
                    i = !0;
                    break
                }
            }
            return !!i
        }

        function u(t) {
            for (var e = o.default.model.ship.get(t), i = !1, r = 0; r < e.slotNum; r++) {
                var s = e.getSlotitemTousai(r),
                    a = e.getSlotitemTousaiMax(r),
                    _ = e.getSlotitems()[r];
                if (_ && _.equipTypeSp == n.EquipType._41_OGATA_HIKOUTEI && (a = 1), a > s) {
                    i = !0;
                    break
                }
            }
            return !!i
        }
        t.CalcRequireMaterials = e, t.CheckRequireSupplyDeck = i, t.CheckRequireSupplyDeckAll = r, t.CheckRequireSupplyDeckBaux = s, t.CheckRequireSupplyShip = a, t.CheckRequireSupplyShipAll = _, t.CheckRequireSupplyShipBaux = u
    }(e.SupplyUtil || (e.SupplyUtil = {}))
}