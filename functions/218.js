const function218 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0);
    ! function (t) {
        function e(t) {
            var e = 0,
                i = 0,
                o = 0;
            return t.forEach(function (t) {
                var r = n.default.model.ship.get(t);
                e += r.getFuelForSupply(), i += r.getAmmoForSupply(), o += r.getBauxForSupply()
            }), {
                fuel: e,
                ammo: i,
                baux: o
            }
        }

        function i(e) {
            for (var i = n.default.model.deck.get(e), o = i.getCount(), r = 0; r < o; r++) {
                var s = i.getShipMemID(r);
                if (t.CheckRequireSupplyShip(s)) return !0
            }
            return !1
        }

        function o(e) {
            for (var i = n.default.model.deck.get(e), o = i.getCount(), r = 0; r < o; r++) {
                var s = i.getShipMemID(r);
                if (t.CheckRequireSupplyShipAll(s)) return !0
            }
            return !1
        }

        function r(e) {
            for (var i = n.default.model.deck.get(e), o = i.getCount(), r = 0; r < o; r++) {
                var s = i.getShipMemID(r);
                if (t.CheckRequireSupplyShipBaux(s)) return !0
            }
            return !1
        }

        function s(t) {
            var e = n.default.model.ship.get(t);
            return !(0 != (e.ammoMax <= e.ammoNow && e.fuelMax <= e.fuelNow))
        }

        function a(t) {
            for (var e = n.default.model.ship.get(t), i = 0 == (e.ammoMax <= e.ammoNow && e.fuelMax <= e.fuelNow), o = 0; o < e.slotNum; o++) {
                var r = e.getSlotitemTousai(o),
                    s = e.getSlotitemTousaiMax(o),
                    a = e.getSlotitems()[o];
                if (a && 41 == a.equipTypeSp && (s = 1), s > r) {
                    i = !0;
                    break
                }
            }
            return !!i
        }

        function _(t) {
            for (var e = n.default.model.ship.get(t), i = !1, o = 0; o < e.slotNum; o++) {
                var r = e.getSlotitemTousai(o),
                    s = e.getSlotitemTousaiMax(o),
                    a = e.getSlotitems()[o];
                if (a && 41 == a.equipTypeSp && (s = 1), s > r) {
                    i = !0;
                    break
                }
            }
            return !!i
        }
        t.CalcRequireMaterials = e, t.CheckRequireSupplyDeck = i, t.CheckRequireSupplyDeckAll = o, t.CheckRequireSupplyDeckBaux = r, t.CheckRequireSupplyShip = s, t.CheckRequireSupplyShipAll = a, t.CheckRequireSupplyShipBaux = _
    }(e.SupplyUtil || (e.SupplyUtil = {}))
}