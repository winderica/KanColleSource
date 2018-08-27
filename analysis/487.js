/*
 * the function called by `476.js`
 * equippable equipments of ships
 */
const function487 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(488), r = function () {
        function t() {
            this.__map__ = {}
        }

        t.prototype.__initData__ = function (t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e], n = new o.EquipModel(i), r = n.ship_id.toString();
                this.__map__[r] = n
            }
        };
        t.prototype.get = function (t) {
            var e = t.toString(), i = this.__map__[e];
            if (i) return i;
            var r = n.default.model.ship.getMst(t).shipTypeID,
                s = n.default.model.shipType.get(r).getEquippableTypes(), a = {};
            return a.api_ship_id = t, a.api_equip_type = s, new o.EquipModel(a)
        };
        return t
    }();
    e.EquipModelHolder = r
}