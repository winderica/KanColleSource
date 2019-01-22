const function219 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0);
    ! function (t) {
        function e(t) {
            var e = 0,
                i = 0;
            return t.forEach(function (t) {
                var o = n.default.model.ship.get(t);
                e += o.getFuelForSupply(), i += o.getAmmoForSupply()
            }), {
                fuel: e,
                ammo: i
            }
        }

        function i(e) {
            for (var i = n.default.model.deck.get(e), o = i.getCount(), r = 0; r < o; r++) {
                var s = i.getShipMemID(r);
                if (t.CheckRequireSupplyShip(s)) return !0
            }
            return !1
        }

        function o(t) {
            var e = n.default.model.ship.get(t);
            return !(0 != (e.ammoMax <= e.ammoNow && e.fuelMax <= e.fuelNow))
        }
        t.CalcRequireMaterials = e, t.CheckRequireSupplyDeck = i, t.CheckRequireSupplyShip = o
    }(e.SupplyUtil || (e.SupplyUtil = {}))
}