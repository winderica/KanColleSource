/*
 * the function called by `487.js`
 * equippable equipments of ships (api_start2.api_mst_equip_ship)
 */
const function488 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t(t) {
            this._o = t
        }

        // 艦船ID
        Object.defineProperty(t.prototype, "ship_id", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_ship_id")
            }, enumerable: !0, configurable: !0
        });
        // 装備可能カテゴリ
        Object.defineProperty(t.prototype, "equip_type", {
            get: function () {
                return n.ObjUtil.getNumArray(this._o, "api_equip_type")
            }, enumerable: !0, configurable: !0
        });
        return t
    }();
    e.EquipModel = o
}